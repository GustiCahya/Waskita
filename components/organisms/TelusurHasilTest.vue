<template>
  <div>
    <div>
      <v-card-title class="headline"> Telusur Hasil Test </v-card-title>
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
              <app-bulk-input
                v-model="hasilTest"
                :rules="rules.hasilTest"
                label="Hasil Test & Dokumentasi Test"
                placeholder="Hasil Test & Dokumentasi Test"
                outlined
                dense
              >
                <lampiran-form :items="hasilTest" />
              </app-bulk-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <app-bulk-input
                v-model="laboratorium"
                :rules="rules.laboratorium"
                label="Lokasi Laboratorium"
                placeholder="Laboratorium"
                outlined
                dense
              >
                <location-bulk-form :items="laboratorium" />
              </app-bulk-input>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <app-bulk-input
                v-model="saksiWaskita"
                :rules="rules.saksiWaskita"
                label="Saksi Waskita"
                placeholder="Saksi Waskita"
                outlined
                dense
              >
                <personil-form :items="saksiWaskita" />
              </app-bulk-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <app-bulk-input
                v-model="saksiPemberiKerja"
                :rules="rules.saksiPemberiKerja"
                label="Saksi Pemberi Kerja"
                placeholder="Saksi Pemberi Kerja"
                outlined
                dense
              >
                <personil-form :items="saksiPemberiKerja" />
              </app-bulk-input>
            </v-col>
            <v-col cols="12" md="6" class="py-0"></v-col>
          </v-row>
          <!-- items -->
          <tht-items-form :id-telusur="idTelusur" :items="items" />
          <!-- footer input -->
          <v-row justify="end">
            <v-col cols="12" md="6">
              <v-card class="mt-3" color="$isDark ? 'grey darken-4' : ''">
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
              color="blue darken-3 white--text"
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
            <v-btn color="grey darken-3 white--text" nuxt :loading="loadingPrint" @click="redirectPrint">
              <v-icon left dark> mdi-printer </v-icon>
              print / download pdf
            </v-btn>
          </div>
          <div
            v-if="localId"
            class="d-flex justify-center mt-3"
            style="width: 100%"
          >
            <v-btn color="blue darken-1 white--text" nuxt :loading="loadingDocx" @click="redirectDocx">
              <v-icon left dark> mdi-note-text-outline </v-icon>
              Download DOCX
            </v-btn>
          </div>
        </v-card-actions>
      </v-form>
    </div>
    <tht ref="printDoc" :id-telusur="idTelusur" />
  </div>
</template>
<script>
import AppBulkInput from "../atoms/AppBulkInput.vue";
import AppDatePicker from "../atoms/AppDatePicker.vue";
import PersonilForm from "../molecules/PersonilForm.vue";
import LocationBulkForm from "../molecules/LocationBulkForm.vue";
import LampiranForm from "../molecules/LampiranForm.vue";
import ThtItemsForm from "../molecules/ThtItemsForm.vue";
import tht from "./print/tht";
export default {
  components: {
    AppDatePicker,
    AppBulkInput,
    PersonilForm,
    LocationBulkForm,
    LampiranForm,
    ThtItemsForm,
    tht,
  },
  props: {
    idTelusur: String,
  },
  data() {
    return {
      // form
      mainForm: "PW-QTY-07-02-03",
      localId: "",
      no: "",
      hasilTest: [],
      laboratorium: [],
      saksiWaskita: [],
      saksiPemberiKerja: [],
      rules: {
        mainForm: [(v) => !!v || "Harap diisi"],
        no: [(v) => !!v || "Harap diisi"],
        hasilTest: [(v) => v.length >= 1 || "Harap diisi"],
        laboratorium: [(v) => v.length >= 1 || "Harap diisi"],
        saksiWaskita: [(v) => v.length >= 1 || "Harap diisi"],
        saksiPemberiKerja: [(v) => v.length >= 1 || "Harap diisi"],
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
      loadingDocx: false,
    };
  },
  computed: {
    display() {
      return `${this.items.length} ${this.label}`;
    },
  },
  watch: {
    async mengetahuiTtdFile(val) {
      this.mengetahuiTtd = await this.$toBase64(val);
    },
    async dibuatOlehTtdFile(val) {
      this.dibuatOlehTtd = await this.$toBase64(val);
    },
    items: {
      handler(items) {
        const lastDate =
          items?.[items.length - 1]?.tanggalPengetesan || new Date();
        this.dibuatOlehTanggal = lastDate;
      },
      deep: true,
    },
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
                      from: "TelusurHasilTest",
                      localField: "idTht",
                      foreignField: "_id",
                      as: "tht",
                    },
                  },
                ],
              }),
            },
          })
          .then((res) => res?.data?.result);
        const item = result?.[0]?.tht?.[0];
        if (item) {
          this.localId = item._id;
          if (item?.mainForm) {
            this.mainForm = item.mainForm;
          }
          this.no = item.no;
          this.hasilTest = item?.hasilTest || [];
          this.laboratorium = item.laboratorium;
          this.saksiWaskita = item.saksiWaskita;
          this.saksiPemberiKerja = item.saksiPemberiKerja;
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
          hasilTest: this.hasilTest,
          laboratorium: this.laboratorium,
          saksiWaskita: this.saksiWaskita,
          saksiPemberiKerja: this.saksiPemberiKerja,
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
            .post("/api/TelusurHasilTest/create", sendData)
            .then((res) => res?.data?.result);
        } else {
          // if edit
          result = await this.$axios
            .patch("/api/TelusurHasilTest/update", {
              _id: this.localId,
              ...sendData,
            })
            .then((res) => res?.data?.result);
        }
        this.localId = result._id;
        await this.$axios
          .patch("/api/Telusur/update", {
            _id: this.idTelusur,
            idTht: this.localId,
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
    async redirectDocx() {
      this.loadingDocx = true;
      const isDone = await this.generate();
      if(isDone){
        await this.$refs.printDoc.convertDocx();
      }
      this.loadingDocx = false;
    },
  },
};
</script>
