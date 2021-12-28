<template>
  <div>
    <div>
      <v-card-title class="headline"> Telusur Benda Uji </v-card-title>
      <v-row v-if="loadingFetch" justify="center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>
      <v-form v-else ref="form" v-model="form" @submit.prevent="generate">
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="mainForm"
                label="Form"
                :rules="rules.mainForm"
                outlined
                dense
              />
            </v-col>
            <v-col cols="12" md="6" class="py-0"></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="no"
                :rules="rules.no"
                label="No. Formulir"
                placeholder="No. Formulir"
                outlined
                dense
              />
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="jumlahBendaUji"
                :rules="rules.jumlahBendaUji"
                label="Jumlah Benda Uji"
                placeholder="Jumlah Benda Uji"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <app-bulk-input
                v-model="dimensi"
                :rules="rules.dimensi"
                label="Dimensi"
                placeholder="Dimensi"
                outlined
                dense
              >
                <dimensi-form :items="dimensi" />
              </app-bulk-input>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <app-bulk-input
                v-model="personil"
                :rules="rules.personil"
                label="Personil"
                placeholder="Personil"
                outlined
                dense
              >
                <personil-form :items="personil" />
              </app-bulk-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <app-date-picker
                v-model="tanggalPembuatan"
                :rules="rules.tanggalPembuatan"
                label="Tanggal Pembuatan"
                placeholder="Tanggal Pembuatan"
                outlined
                dense
              />
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <app-bulk-input
                v-model="lampiran"
                :rules="rules.lampiran"
                label="Lampiran"
                placeholder="Lampiran"
                outlined
                dense
              >
                <lampiran-form :items="lampiran" />
              </app-bulk-input>
            </v-col>
          </v-row>
          <!-- items -->
          <tbu-items-form :id-telusur="idTelusur" :items="items" />
          <!-- footer input -->
          <v-row justify="end">
            <v-col cols="12" md="6">
              <v-card class="mt-3" color="grey darken-4">
                <h5 class="pa-3">Dibuat oleh</h5>
                <div class="px-3 pt-0 pb-5">
                  <v-row>
                    <v-col cols="12" md="6" class="pb-0">
                      <v-text-field
                        v-model="dibuatOlehLokasi"
                        :rules="rules.dibuatOlehLokasi"
                        label="Lokasi"
                        placeholder="Lokasi"
                        outlined
                        dense
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <app-date-picker
                        v-model="dibuatOlehTanggal"
                        :rules="rules.dibuatOlehTanggal"
                        label="Tanggal"
                        placeholder="Tanggal"
                        outlined
                        dense
                      />
                    </v-col>
                  </v-row>
                  <v-text-field
                    v-model="dibuatOlehJabatan"
                    :rules="rules.dibuatOlehJabatan"
                    label="Jabatan"
                    placeholder="Jabatan"
                    outlined
                    dense
                  />
                  <v-text-field
                    v-model="dibuatOlehNama"
                    :rules="rules.dibuatOlehNama"
                    label="Nama"
                    placeholder="Nama"
                    outlined
                    dense
                  />
                  <v-file-input
                    v-model="dibuatOlehTtdFile"
                    :rules="rules.dibuatOlehTtdFile"
                    accept="image/png, image/jpeg, image/bmp"
                    label="TTD (max: 3mb)"
                    prepend-icon="mdi-image"
                    outlined
                    dense
                  ></v-file-input>
                  <div class="d-flex justify-center">
                    <v-img
                      v-if="dibuatOlehTtd"
                      class="white darken-2 rounded-sm"
                      max-width="150"
                      max-height="150"
                      contain
                      :src="dibuatOlehTtd"
                    />
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-block">
          <div class="d-flex justify-center" style="width: 100%">
            <v-btn
              type="submit"
              color="blue darken-3"
              nuxt
              :loading="loadingGenerate"
            >
              {{ !localId ? "Generate" : "Edit" }}
            </v-btn>
          </div>
          <div
            v-if="localId"
            class="d-flex justify-center mt-3"
            style="width: 100%"
          >
            <v-btn color="grey darken-3" nuxt :loading="loadingPrint" @click="redirectPrint">
              <v-icon left dark> mdi-printer </v-icon>
              print / download pdf
            </v-btn>
          </div>
        </v-card-actions>
      </v-form>
    </div>
    <tbu ref="printDoc" :id-telusur="idTelusur" />
  </div>
</template>
<script>
import AppBulkInput from "../atoms/AppBulkInput.vue";
import AppDatePicker from "../atoms/AppDatePicker.vue";
import PersonilForm from "../molecules/PersonilForm.vue";
import DimensiForm from "../molecules/DimensiForm.vue";
import TbuItemsForm from "../molecules/TbuItemsForm.vue";
import LampiranForm from "../molecules/LampiranForm.vue";
import tbu from "./print/tbu";
export default {
  components: {
    AppDatePicker,
    AppBulkInput,
    DimensiForm,
    PersonilForm,
    TbuItemsForm,
    LampiranForm,
    tbu,
  },
  props: {
    idTelusur: String,
  },
  data() {
    return {
      // form
      mainForm: "PW-QTY-07-02-02",
      localId: "",
      no: "",
      jumlahBendaUji: "",
      dimensi: [],
      personil: [],
      tanggalPembuatan: null,
      lampiran: [],
      rules: {
        mainForm: [(v) => !!v || "Harap diisi"],
        no: [(v) => !!v || "Harap diisi"],
        jumlahBendaUji: [
          // (v) => !!v || "Harap diisi",
          // (v) => /^\d*,?\d*$/gi.test(v) || "Harus Angka (contoh: 16 atau 16,5)",
        ],
        dimensi: [(v) => v.length >= 1 || "Harap diisi"],
        personil: [(v) => v.length >= 1 || "Harap diisi"],
        lampiran: [],
        tanggalPembuatan: [(v) => !!v || "Harap diisi"],
        dibuatOlehLokasi: [(v) => !!v || "Harap diisi"],
        dibuatOlehTanggal: [(v) => !!v || "Harap diisi"],
        dibuatOlehJabatan: [(v) => !!v || "Harap diisi"],
        dibuatOlehNama: [(v) => !!v || "Harap diisi"],
        dibuatOlehTtdFile: [
          (v) =>
            v?.size ? v?.size < 3000000 || "Harus kurang dari 3mb!" : true,
        ],
      },
      // items
      items: [],
      // footer dibuatOleh
      dibuatOlehLokasi: "Bekasi",
      dibuatOlehTanggal: new Date(),
      dibuatOlehJabatan: "Quality Control Officer",
      dibuatOlehNama: "",
      dibuatOlehTtdFile: null,
      dibuatOlehTtd: "",
      // validity form
      form: false,
      // others
      loadingFetch: false,
      loadingGenerate: false,
      loadingPrint: false,
    };
  },
  computed: {
    display() {
      return `${this.items.length} ${this.label}`;
    },
  },
  watch: {
    async dibuatOlehTtdFile(val) {
      this.dibuatOlehTtd = await this.$toBase64(val);
    },
    items: {
      handler() {
        const lastKodeSilinder = this?.items?.[this.items.length - 1]?.kodeSilinder || "";
        this.jumlahBendaUji = lastKodeSilinder?.split("/")?.reverse()?.[0] || this.jumlahBendaUji;
      },
      deep: true,
    }
  },
  beforeMount() {
    const fullName = this.$getUserData()?.fullName;
    this.dibuatOlehNama = fullName;
  },
  async mounted() {
    // fetch telusur data
    const id = this.$route.query.id || this.idTelusur;
    if (id) {
      this.loadingFetch = true;
      try {
        const result = await this.$axios
          .get("/api/Telusur/get", {
            params: {
              jsonQuery: JSON.stringify({
                _id: id,
                pipeline: [
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
                      from: "TelusurBahanMasuk",
                      localField: "idTbm",
                      foreignField: "_id",
                      as: "tbm",
                    },
                  },
                  {
                    $project: {
                      "tbm.tanggalMasuk": 1,
                      "tbu": 1
                    }
                  }
                ],
              }),
            },
          })
          .then((res) => res?.data?.result);
        const tbm = result?.[0]?.tbm?.[0];
        if (tbm) {
          this.tanggalPembuatan = tbm?.tanggalMasuk;
        }
        const item = result?.[0]?.tbu?.[0];
        if (item) {
          this.localId = item._id;
          if(item?.mainForm){
            this.mainForm = item.mainForm;
          }
          this.no = item.no;
          this.jumlahBendaUji = item.jumlahBendaUji;
          this.dimensi = item.dimensi;
          this.personil = item.personil;
          this.tanggalPembuatan = item?.tanggalPembuatan;
          this.lampiran = item?.lampiran || [];
          this.items = item.items;
          this.dibuatOlehLokasi = item.dibuatOleh?.lokasi;
          this.dibuatOlehTanggal = item.dibuatOleh?.tanggal;
          this.dibuatOlehJabatan = item.dibuatOleh?.jabatan;
          this.dibuatOlehNama = item.dibuatOleh?.nama;
          this.dibuatOlehTtd = item.dibuatOleh?.ttd;
        }
      } catch (err) {
        this.$swal(err?.response?.data || err?.message, "", "error");
      }
      this.loadingFetch = false;
    }
  },
  methods: {
    async generate() {
      this.$refs.form.validate();
      if (!this.form) {
        this.$swal("Harap perhatikan inputan", "", "warning");
        window.scroll({
          top: +this.$refs.form.$el.offsetTop + 100,
          behavior: "smooth",
        });
        return false;
      }
      if (this.items.length < 1) {
        this.$swal("Harap isi detail minimal satu", "", "warning");
        window.scroll({
          top: +this.$refs.form.$el.offsetTop + 300,
          behavior: "smooth",
        });
        return false;
      }
      this.loadingGenerate = true;
      try {
        const sendData = {
          idTelusur: this.idTelusur,
          mainForm: this.mainForm,
          no: this.no,
          jumlahBendaUji: this.jumlahBendaUji,
          dimensi: this.dimensi,
          personil: this.personil,
          tanggalPembuatan: this.tanggalPembuatan,
          lampiran: this.lampiran,
          items: this.items,
          dibuatOleh: {
            lokasi: this.dibuatOlehLokasi,
            tanggal: this.dibuatOlehTanggal,
            nama: this.dibuatOlehNama,
            jabatan: this.dibuatOlehJabatan,
            ttd: this.dibuatOlehTtd,
          },
        };
        let result;
        if (!this.localId) {
          // if added
          result = await this.$axios
            .post("/api/TelusurBendaUji/create", sendData)
            .then((res) => res?.data?.result);
        } else {
          // if edit
          result = await this.$axios
            .patch("/api/TelusurBendaUji/update", {
              _id: this.localId,
              ...sendData,
            })
            .then((res) => res?.data?.result);
        }
        this.localId = result._id;
        await this.$axios
          .patch("/api/Telusur/update", {
            _id: this.idTelusur,
            idTbu: this.localId,
          })
          .then((res) => res?.data?.result);
      } catch (err) {
        this.$swal(err?.response?.data || err?.message, "", "error");
      }
      this.loadingGenerate = false;
      return true;
    },
    async redirectPrint() {
      this.loadingPrint = true;
      const isDone = await this.generate();
      if (isDone) {
        await this.$refs.printDoc.print();
      }
      this.loadingPrint = false;
    },
  },
};
</script>
