<template>
  <div>
    <div>
      <v-card-title class="headline"> Telusur Bahan Masuk </v-card-title>
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
                v-model="noIzin"
                :rules="rules.noIzin"
                label="No. Izin"
                placeholder="No. Izin"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <app-date-picker
                v-model="tanggalMasuk"
                :rules="rules.tanggalMasuk"
                label="Tanggal Masuk"
                placeholder="Tanggal Masuk"
                outlined
                dense
              />
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <app-bulk-input
                v-model="pemasok"
                :rules="rules.pemasok"
                label="Pemasok"
                placeholder="Pemasok"
                outlined
                dense
              >
                <location-bulk-form :items="pemasok" />
              </app-bulk-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="lokasiPengecoran"
                :rules="rules.lokasiPengecoran"
                label="Lokasi Pengecoran"
                placeholder="Lokasi Pengecoran"
                outlined
                dense
              />
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="mutuBeton"
                :rules="rules.mutuBeton"
                label="Mutu Beton"
                placeholder="Mutu Beton"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
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
          <tbm-items-form :id-telusur="idTelusur" :items="items" />
          <!-- footer input -->
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mt-3" color="$isDark ? 'grey darken-4' : ''">
                <h5 class="pa-3">Mengetahui</h5>
                <div class="px-3 pt-0 pb-5">
                  <v-text-field
                    v-model="mengetahuiJabatan"
                    :rules="rules.mengetahuiJabatan"
                    label="Jabatan"
                    placeholder="Jabatan"
                    outlined
                    dense
                  />
                  <v-text-field
                    v-model="mengetahuiNama"
                    :rules="rules.mengetahuiNama"
                    label="Nama"
                    placeholder="Nama"
                    outlined
                    dense
                  />
                  <v-file-input
                    v-model="mengetahuiTtdFile"
                    :rules="rules.mengetahuiTtdFile"
                    accept="image/png, image/jpeg, image/bmp"
                    label="TTD (max: 3mb)"
                    prepend-icon="mdi-image"
                    outlined
                    dense
                  ></v-file-input>
                  <div class="d-flex justify-center">
                    <v-img
                      v-if="mengetahuiTtd"
                      class="white rounded-sm"
                      max-width="150"
                      max-height="150"
                      contain
                      :src="mengetahuiTtd"
                    />
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="mt-3" :color="$isDark ? 'grey darken-4' : ''">
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
    <tbm ref="printDoc" :id-telusur="idTelusur" />
  </div>
</template>
<script>
import AppBulkInput from "../atoms/AppBulkInput.vue";
import AppDatePicker from "../atoms/AppDatePicker.vue";
import LocationBulkForm from "../molecules/LocationBulkForm.vue";
import PersonilForm from "../molecules/PersonilForm.vue";
import TbmItemsForm from "../molecules/TbmItemsForm.vue";
import LampiranForm from "../molecules/LampiranForm.vue";
import tbm from "./print/tbm.vue";
export default {
  components: {
    AppDatePicker,
    AppBulkInput,
    LocationBulkForm,
    PersonilForm,
    TbmItemsForm,
    LampiranForm,
    tbm,
  },
  props: {
    idTelusur: String,
  },
  data() {
    return {
      // form
      mainForm: "PW-QTY-07-02-01",
      localId: "",
      no: "",
      noIzin: "",
      tanggalMasuk: null,
      pemasok: [],
      lokasiPengecoran: "",
      mutuBeton: "",
      personil: [],
      lampiran: [],
      rules: {
        mainForm: [(v) => !!v || "Harap diisi"],
        no: [(v) => !!v || "Harap diisi"],
        noIzin: [(v) => !!v || "Harap diisi"],
        tanggalMasuk: [(v) => !!v || "Harap diisi"],
        pemasok: [(v) => v.length >= 1 || "Harap diisi"],
        lokasiPengecoran: [(v) => !!v || "Harap diisi"],
        mutuBeton: [(v) => !!v || "Harap diisi"],
        personil: [(v) => v.length >= 1 || "Harap diisi"],
        lampiran: [],
        mengetahuiJabatan: [(v) => !!v || "Harap diisi"],
        mengetahuiNama: [(v) => !!v || "Harap diisi"],
        mengetahuiTtdFile: [
          (v) =>
            v?.size ? v?.size < 3000000 || "Harus kurang dari 3mb!" : true,
        ],
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
      // footer mengetahui
      mengetahuiJabatan: "QC Officer",
      mengetahuiNama: "",
      mengetahuiTtdFile: null,
      mengetahuiTtd: "",
      // footer dibuatOleh
      dibuatOlehLokasi: "Bekasi",
      dibuatOlehTanggal: new Date(),
      dibuatOlehJabatan: "SPLEM",
      dibuatOlehNama: "",
      dibuatOlehTtdFile: null,
      dibuatOlehTtd: "",
      // validity form
      form: false,
      // loading
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
                      from: "TelusurBahanMasuk",
                      localField: "idTbm",
                      foreignField: "_id",
                      as: "tbm",
                    },
                  },
                ],
              }),
            },
          })
          .then((res) => res?.data?.result);
        const item = result?.[0]?.tbm?.[0];
        if (item) {
          this.localId = item._id;
          if(item?.mainForm){
            this.mainForm = item.mainForm;
          }
          this.no = item.no;
          this.noIzin = item.noIzin;
          this.tanggalMasuk = item.tanggalMasuk;
          this.pemasok = item.pemasok;
          this.lokasiPengecoran = item.lokasiPengecoran;
          this.mutuBeton = item.mutuBeton;
          this.personil = item.personil;
          this.lampiran = item?.lampiran || [];
          this.items = item.items;
          this.mengetahuiJabatan = item.mengetahui?.jabatan;
          this.mengetahuiNama = item.mengetahui?.nama;
          this.mengetahuiTtd = item.mengetahui?.ttd;
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
          noIzin: this.noIzin,
          tanggalMasuk: this.tanggalMasuk,
          pemasok: this.pemasok,
          lokasiPengecoran: this.lokasiPengecoran,
          mutuBeton: this.mutuBeton,
          personil: this.personil,
          lampiran: this.lampiran,
          items: this.items,
          mengetahui: {
            nama: this.mengetahuiNama,
            jabatan: this.mengetahuiJabatan,
            ttd: this.mengetahuiTtd,
          },
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
            .post("/api/TelusurBahanMasuk/create", sendData)
            .then((res) => res?.data?.result);
        } else {
          // if edit
          result = await this.$axios
            .patch("/api/TelusurBahanMasuk/update", {
              _id: this.localId,
              ...sendData,
            })
            .then((res) => res?.data?.result);
        }
        this.localId = result._id;
        await this.$axios
          .patch("/api/Telusur/update", {
            _id: this.idTelusur,
            idTbm: this.localId,
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
      if(isDone){
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
