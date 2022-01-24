<template>
  <div>
    <!-- Filter -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="text-center">
          <v-card-text class="text-center">
            <h4 class="text-h4 mb-5 text-left text--primary font-weight-medium">
              Review Telusur
            </h4>
            <v-form
              ref="filterTelusur"
              v-model="filterTelusurValid"
              @submit.prevent="
                () => {
                  page = 1;
                  getTelusur();
                }
              "
            >
              <v-text-field
                v-model.trim="filter.businessUnit"
                label="Bisnis Unit"
                dense
                outlined
              />
              <v-text-field
                v-model.trim="filter.proyek"
                label="Proyek"
                dense
                outlined
              />
              <v-text-field
                v-model.trim="filter.lokasiPengecoran"
                label="Lokasi Pengecoran"
                dense
                outlined
              />
              <v-text-field
                v-model.trim="filter.mutuBeton"
                label="Mutu Beton"
                dense
                outlined
              />
              <div class="d-flex justify-center align-center">
                <v-switch
                  v-model="filter.isUseDate"
                  class="ma-0 pa-0"
                  color="success"
                  :label="`Cari berdasarkan tanggal`"
                ></v-switch>
              </div>
              <div v-if="filter.isUseDate">
                <app-date-picker
                  v-model="filter.tanggalMasukAwal"
                  label="Tanggal Mulai Pengecoran"
                  outlined
                  dense
                />
                <app-date-picker
                  v-model="filter.tanggalMasukAkhir"
                  label="Tanggal Selesai Pengecoran"
                  outlined
                  dense
                />
              </div>
              <v-btn
                type="submit"
                class="mr-0"
                color="primary"
                min-width="100"
                rounded
                :disabled="isLoading"
              >
                Cari
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="my-4 pt-8 pb-4">
      <div class="cards mx-5">
        <p v-if="items.length <= 0 && !isLoading" class="text-center mt-3">
          Kosong
        </p>
        <v-row v-else>
          <v-col cols="12">
            <v-simple-table class="text-caption">
              <thead>
                <tr>
                  <th class="text-left">Aksi</th>
                  <th class="text-left">Bisnis Unit</th>
                  <th class="text-left">Proyek</th>
                  <th class="text-left">Tanggal</th>
                  <th class="text-left">Lokasi</th>
                  <th class="text-left">Volume Total</th>
                  <th class="text-left">Mutu Beton</th>
                  <th class="text-left">Telusur Bahan Masuk</th>
                  <th class="text-left">Telusur Benda Uji</th>
                  <th class="text-left">Telusur Hasil Test</th>
                  <th class="text-left">Telusur Proses</th>
                  <th v-if="isSuperAdmin" class="text-left">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item._id" class="py-2">
                  <td style="white-space: nowrap">
                    <v-btn
                      icon
                      color="grey lighten-2"
                      @click.native="() => openTelusur(item)"
                    >
                      <v-icon>mdi-monitor</v-icon>
                    </v-btn>
                  </td>
                  <td style="white-space: nowrap">{{ item.businessUnit }}</td>
                  <td style="white-space: nowrap">{{ item.proyek }}</td>
                  <td style="white-space: nowrap">
                    {{
                      item.tanggalPengecoran
                        ? $moment(item.tanggalPengecoran).format(
                            "dddd, DD MMMM YYYY"
                          )
                        : "Belum Ada"
                    }}
                  </td>
                  <td style="white-space: nowrap">{{ item.lokasiPengecoran }}</td>
                  <td>{{ item.volTotal }}</td>
                  <td>{{ item.mutuBeton }}</td>
                  <td style="white-space: nowrap; cursor:pointer;" @click="redirectTelusur(item, 1)">{{ item.tbmNo }}</td>
                  <td style="white-space: nowrap; cursor:pointer;" @click="redirectTelusur(item, 2)">{{ item.tbuNo }}</td>
                  <td style="white-space: nowrap; cursor:pointer;" @click="redirectTelusur(item, 3)">{{ item.thtNo }}</td>
                  <td style="white-space: nowrap; cursor:pointer;" @click="redirectTelusur(item, 4)">{{ item.tpNo }}</td>
                  <td v-if="isSuperAdmin">
                    <v-btn
                      icon
                      color="red darken-2"
                      @click.native="() => removeTelusur(item)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>
      </div>
      <div v-if="isLoading" class="d-flex justify-center">
        <v-progress-circular
          class="my-4"
          indeterminate
          color="primary"
          size="30"
        />
      </div>
      <div class="text-center pt-3 pb-1">
        <v-pagination v-model="page" :length="pagesLength" :total-visible="7" />
      </div>
    </v-card>
  </div>
</template>
<script>
import AppDatePicker from "@/components/atoms/AppDatePicker.vue";
export default {
  components: {
    AppDatePicker,
  },
  layout: "dashboard",
  data() {
    return {
      filter: {
        businessUnit: "",
        proyek: "",
        lokasiPengecoran: "",
        isUseDate: false,
        tanggalMasukAwal: null,
        tanggalMasukAkhir: null,
      },
      items: [],
      filterTelusurValid: false,
      isLoading: true,
      page: 1,
      limit: 10,
      pagesLength: 1,
      // roles
      isSuperAdmin: false,
    };
  },
  watch: {
    async page() {
      await this.getTelusur();
    }
  },
  async beforeMount() {
    const roles = await this.$getUserRoles();
    this.isSuperAdmin = roles?.includes("Super Admin");
  },
  mounted() {
    // fetch data
    this.getTelusur();
  },
  methods: {
    async getTelusur() {
      this.$refs.filterTelusur.validate();
      if (!this.filterTelusurValid) return;
      this.isLoading = true;
      const queryTbm = {};
      if (this.filter?.lokasiPengecoran) {
        queryTbm["tbm.lokasiPengecoran"] = {
          $regex: this.filter?.lokasiPengecoran || "",
          $options: "i",
        };
      }
      if (this.filter?.mutuBeton) {
        queryTbm["tbm.mutuBeton"] = {
          $regex: this.filter?.mutuBeton || "",
          $options: "i",
        };
      }
      if (this.filter?.isUseDate) {
        queryTbm["tbm.tanggalMasuk"] = {
          $gte: this.filter?.tanggalMasukAwal,
          $lte: this.filter?.tanggalMasukAkhir || new Date(),
        };
      }
      try {
        this.items = [];
        const filterMongo = {
          businessUnit: {
            $regex: this.filter?.businessUnit || "",
            $options: "i",
          },
          proyek: { $regex: this.filter?.proyek || "", $options: "i" },
          pipeline: [
            {
              $sort: { _createdDate: -1 },
            },
            {
              $lookup: {
                from: "TelusurBahanMasuk",
                localField: "idTbm",
                foreignField: "_id",
                as: "tbm",
              },
            },
            {
              $unwind: { path: "$tbm", preserveNullAndEmptyArrays: true },
            },
            {
              $match: queryTbm,
            },
            {
              $lookup: {
                from: "TelusurBendaUji",
                localField: "idTbu",
                foreignField: "_id",
                as: "tbu",
              },
            },
            {
              $unwind: { path: "$tbu", preserveNullAndEmptyArrays: true },
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
              $unwind: { path: "$tht", preserveNullAndEmptyArrays: true },
            },
            {
              $lookup: {
                from: "TelusurProses",
                localField: "idTp",
                foreignField: "_id",
                as: "tp",
              },
            },
            {
              $unwind: { path: "$tp", preserveNullAndEmptyArrays: true },
            },
            {
              $project: {
                _id: 1,
                businessUnit: 1,
                proyek: 1,
                "tbm.lokasiPengecoran": 1,
                "tbm.items.volAktual": 1,
                "tbm.mutuBeton": 1,
                "tbm.tanggalMasuk": 1,
                "tbm.no": 1,
                "tbu.no": 1,
                "tht.no": 1,
                "tp.no": 1,
              },
            },
          ],
        };
        const data = await this.$axios
          .get(`/api/Telusur/get`, {
            params: {
              jsonQuery: JSON.stringify(filterMongo),
              page: this.page,
              limit: this.limit,
            },
          })
          .then((res) => res?.data || {});
        this.pagesLength = data.pagesLength;
        this.items = data.result.map((item) => {
          return {
            ...item,
            lokasiPengecoran: item?.tbm?.lokasiPengecoran || "Belum ada",
            volTotal:
              item?.tbm?.items?.reduce(
                (total, item) =>
                  total + +(item?.volAktual?.replace(",", ".") || 0),
                0
              ) || "Belum ada",
            mutuBeton: item?.tbm?.mutuBeton,
            tanggalPengecoran: item?.tbm?.tanggalMasuk,
            tbmNo: item?.tbm?.no || "Belum ada",
            tbuNo: item?.tbu?.no || "Belum ada",
            thtNo: item?.tht?.no || "Belum ada",
            tpNo: item?.tp?.no || "Belum ada",
          };
        });
      } catch (err) {
        this.$swal(err?.response?.data?.message || err?.message);
      }
      this.isLoading = false;
    },
    openTelusur(item) {
      this.$router.push(`/telusur?id=${item._id}`);
    },
    redirectTelusur(item, step) {
      this.$router.push(`/telusur?id=${item._id}&step=${step}`);
    },
    async removeTelusur(item) {
      const result = await this.$swal({
        title: "Yakin ingin menghapus proyek ini?",
        text: "Anda tidak akan bisa mengembalikannya kembali, setelah dihapus!",
        icon: "warning",
        focusCancel: true,
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#808080",
        confirmButtonText: "Iya, hapus",
        cancelButtonText: "Batal",
      });
      if (!result.value) return;
      const data = await this.$axios
        .delete(`/api/Telusur/remove`, {
          params: {
            _id: item._id,
          },
        })
        .then((res) => res?.data);
      if (data?.success) {
        this.getTelusur();
      }
    },
  },
};
</script>
