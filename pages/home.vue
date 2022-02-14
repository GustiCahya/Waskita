<template>
  <div>
    <v-card class="py-5 px-4">
      <h3>Halo, {{ $user.fullName }}</h3>
      <p class="pa-0 ma-0">Berikut rangkuman dari telusur yang sudah dibuat berdasarkan tanggal pengecoran</p>
    </v-card>
    <v-card class="pa-3 my-3">
      <v-row justify="center" align="center" class="px-3 pt-4 pb-6">
        <v-col>
          <h2>Mutu Beton</h2>
        </v-col>
        <v-col>
          <v-select
            v-model="mutuBetonFilter"
            :items="[
              {
                label: '1 Minggu Terakhir',
                value: 'week',
              },
              {
                label: '1 Bulan Terakhir',
                value: 'month',
              },
              {
                label: '1 Tahun Terakhir',
                value: 'year',
              },
            ]"
            :menu-props="{ offsetY: true }"
            item-text="label"
            item-value="value"
            dense
            solo
            hide-details
          />
        </v-col>
      </v-row>
      <div>
        <div v-if="loadingFetch">
          <v-skeleton-loader
            class="mx-auto"
            min-height="500"
            type="table"
          ></v-skeleton-loader>
        </div>
        <div v-else>
          <bar-chart :chart-data="mutuBetonData" :options="mutuBetonOptions" />
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import BarChart from "../components/atoms/BarChart.vue";
export default {
  name: "Home",
  components: {
    BarChart,
  },
  layout: "dashboard",
  data() {
    return {
      // chart
      mutuBetonFilter: "month",
      mutuBetonOptions: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: "#f9f9f9",
          },
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                color: "rgba(42,55,70,0.255)",
              },
              scaleLabel: {
                display: true,
                labelString: "Kuat Tekan (%)",
                fontColor: "#f9f9f9",
              },
              ticks: {
                min: 0,
                max: 100, // Your absolute max value
                callback: function (value) {
                  return value + "%"; // convert it to percentage
                },
                beginAtZero: true,
                fontColor: "#f9f9f9",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                color: "rgba(42,55,70,0.255)",
              },
              scaleLabel: {
                display: true,
                labelString: "Lokasi",
                fontColor: "#f9f9f9",
              },
              ticks: {
                fontColor: "#f9f9f9",
              },
            },
          ],
        },
      },
      // chartData
      locations: [],
      items7Hari: [],
      items28Hari: [],
      // loading
      loadingFetch: false,
    };
  },
  computed: {
    // chart
    mutuBetonData() {
      return {
        labels: this.locations,
        datasets: [
          {
            label: "7 hari",
            backgroundColor: "#48A497",
            borderColor: "#48A4D1",
            color: "white",
            data: this.items7Hari,
          },
          {
            label: "28 hari",
            backgroundColor: "rgba(73,188,170,0.4)",
            borderColor: "rgba(72,174,209,0.4)",
            color: "white",
            data: this.items28Hari,
          },
        ],
      };
    },
  },
  watch: {
    mutuBetonFilter() {
      this.getChartMutuBeton();
    }
  },
  async beforeMount() {},
  async mounted() {
    await this.getChartMutuBeton();
  },
  methods: {
    async getChartMutuBeton() {
      this.loadingFetch = true;
      try {
        let tanggalMasuk;
        if (this.mutuBetonFilter === "week") {
          tanggalMasuk = {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
          };
        }
        if (this.mutuBetonFilter === "month") {
          const d = new Date();
          d.setMonth(d.getMonth() - 1);
          tanggalMasuk = {
            $gte: new Date(d),
          };
        }
        if (this.mutuBetonFilter === "year") {
          const d = new Date();
          d.setFullYear(d.getFullYear() - 1);
          tanggalMasuk = {
            $gte: new Date(d),
          };
        }
        const items = await this.$axios
          .get("/api/Telusur/get", {
            params: {
              jsonQuery: JSON.stringify({
                pipeline: [
                  {
                    $lookup: {
                      from: "TelusurBahanMasuk",
                      localField: "idTbm",
                      foreignField: "_id",
                      as: "tbm",
                    },
                  },
                  {
                    $unwind: {
                      path: "$tbm",
                      preserveNullAndEmptyArrays: true,
                    },
                  },
                  {
                    $lookup: {
                      from: "TelusurHasilTest",
                      localField: "idTht",
                      foreignField: "_id",
                      as: "tht",
                    },
                  },
                  {
                    $unwind: {
                      path: "$tht",
                      preserveNullAndEmptyArrays: true,
                    },
                  },
                  {
                    $project: {
                      "tbm.lokasiPengecoran": 1,
                      "tbm.tanggalMasuk": 1,
                      "tht.items.umurHari": 1,
                      "tht.items.hasilTekan": 1,
                    },
                  },
                  {
                    $match: {
                      "tbm.tanggalMasuk": tanggalMasuk
                    }
                  }
                ],
              }),
            },
          })
          .then((res) => res?.data?.result);
        const locations = [];
        const items7Hari = [];
        const items28Hari = [];
        for (const item of items) {
          if (item?.tht?.items?.[0]?.umurHari) {
            const lokasi = item?.tbm?.lokasiPengecoran;
            const hasilItems = item?.tht?.items || [];
            let decimal7Hari = 0;
            let total7Hari = 0;
            let decimal28Hari = 0;
            let total28Hari = 0;
            for (const hasilItem of hasilItems) {
              const umurHari = hasilItem?.umurHari;
              if (/7 Hari/i.test(umurHari)) {
                decimal7Hari += this.$convertPercenttoDecimal(
                  hasilItem?.hasilTekan
                );
                total7Hari++;
              }
              if (/28 Hari/i.test(umurHari)) {
                decimal28Hari += this.$convertPercenttoDecimal(
                  hasilItem?.hasilTekan
                );
                total28Hari++;
              }
            }
            const a = +((decimal7Hari / total7Hari) * 100).toFixed(2) || 0;
            const b = +((decimal28Hari / total28Hari) * 100).toFixed(2) || 0;
            locations.push(lokasi);
            items7Hari.push(a);
            items28Hari.push(b);
          }
        }
        this.locations = locations;
        this.items7Hari = items7Hari;
        this.items28Hari = items28Hari;
      } catch (err) {
        this.$swal(err?.response?.data || err?.message, "", "error");
      }
      this.loadingFetch = false;
    },
  },
};
</script>
