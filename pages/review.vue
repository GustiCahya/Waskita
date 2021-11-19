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
              @submit.prevent="getTelusur"
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
              <v-btn
                type="submit"
                class="mr-0"
                color="primary"
                min-width="100"
                rounded
                :loading="isLoading"
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
          <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6">
            <v-card class="grey darken-4">
              <v-card-text class="pb-0 white--text">
                <v-row>
                  <v-col class="py-0 text-center mb-5" cols="12">
                    <h2 class="pt-4 pb-2">{{ item.businessUnit }}</h2>
                    <h4 class="font-weight-medium">{{ item.proyek }}</h4>
                  </v-col>
                  <v-col class="py-0 text-left" cols="12">
                    <div>
                      <h4 class="font-weight-medium ma-0 pa-0">
                        Telusur Bahan Masuk :
                      </h4>
                      <h5
                        class="text-caption ma-0 pa-0 mb-2 ml-2"
                        style="cursor:pointer;"
                        @click="redirectTelusur(item, 1)"
                      >
                        {{ item.tbmNo }}
                      </h5>
                    </div>
                  </v-col>
                  <v-col class="py-0 text-left" cols="12">
                    <div>
                      <h4 class="font-weight-medium ma-0 pa-0">
                        Telusur Benda Uji :
                      </h4>
                      <h5
                        class="text-caption ma-0 pa-0 mb-2 ml-2"
                        style="cursor:pointer;"
                        @click="redirectTelusur(item, 2)"
                      >
                        {{ item.tbuNo }}
                      </h5>
                    </div>
                  </v-col>
                  <v-col class="py-0 text-left" cols="12">
                    <div>
                      <h4 class="font-weight-medium ma-0 pa-0">
                        Telusur Hasil Test :
                      </h4>
                      <h5
                        class="text-caption ma-0 pa-0 mb-2 ml-2"
                        style="cursor:pointer;"
                        @click="redirectTelusur(item, 3)"
                      >
                        {{ item.thtNo }}
                      </h5>
                    </div>
                  </v-col>
                  <v-col class="py-0 text-left" cols="12">
                    <div>
                      <h4 class="font-weight-medium ma-0 pa-0">
                        Telusur Proses :
                      </h4>
                      <h5
                        class="text-caption ma-0 pa-0 mb-2 ml-2"
                        style="cursor:pointer;"
                        @click="redirectTelusur(item, 4)"
                      >
                        {{ item.tpNo }}
                      </h5>
                    </div>
                  </v-col>
                </v-row>
                <v-divider class="my-3" />
                <v-row class="d-flex py-1 px-3">
                  <div class="d-block text-left">
                    <h6 class="pa-0 ma-0">Tanggal Dibuat :</h6>
                  </div>
                  <v-spacer></v-spacer>
                  <div class="d-block text-right">
                    <h6 class="pa-0 ma-0">
                      {{ $moment(item._createdDate).fromNow() }}
                    </h6>
                  </div>
                </v-row>
                <v-divider class="my-3" />
              </v-card-text>
              <v-card-actions style="padding-top: 0">
                <v-btn
                  v-if="isSuperAdmin"
                  icon
                  color="red darken-2"
                  @click.native="() => removeTelusur(item)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-spacer />
                <v-btn
                  icon
                  color="grey lighten-2"
                  @click.native="() => openTelusur(item)"
                >
                  <v-icon>mdi-monitor</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
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
export default {
  layout: "dashboard",
  data() {
    return {
      filter: {
        businessUnit: "",
        proyek: "",
      },
      items: [],
      filterTelusurValid: false,
      isLoading: true,
      page: 1,
      limit: 10,
      pagesLength: 1,
      // roles
      isSuperAdmin: false
    };
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
              $lookup: {
                from: "TelusurBendaUji",
                localField: "idTbu",
                foreignField: "_id",
                as: "tbu",
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
              $lookup: {
                from: "TelusurProses",
                localField: "idTp",
                foreignField: "_id",
                as: "tp",
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
            tbmNo: item?.tbm?.[0]?.no || "Belum ada",
            tbuNo: item?.tbu?.[0]?.no || "Belum ada",
            thtNo: item?.tht?.[0]?.no || "Belum ada",
            tpNo: item?.tp?.[0]?.no || "Belum ada",
          };
        });
      } catch (err) {
        this.$swal(err?.response?.data?.message || err?.message);
      }
      this.isLoading = false;
    },
    openTelusur(item) {
      window.open(`/telusur?id=${item._id}`);
    },
    redirectTelusur(item, step) {
      window.open(`/telusur?id=${item._id}&step=${step}`);
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
