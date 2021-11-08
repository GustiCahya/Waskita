<template>
  <div>
    <v-card-title class="headline"> Telusur Bahan Masuk </v-card-title>
    <v-form ref="form" v-model="form" @submit.prevent="generate">
      <v-card-text>
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
              <pemasok-form :items="pemasok" />
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
            <app-bulk-input
              v-model="mutuBeton"
              :rules="rules.mutuBeton"
              label="Mutu Beton"
              placeholder="Mutu Beton"
              outlined
              dense
            >
              <mutu-beton-form :items="mutuBeton" />
            </app-bulk-input>
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
          <v-col cols="12" md="6" class="py-0"> </v-col>
        </v-row>
        <!-- items -->
        <tbm-items-form :items="items" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn type="submit" color="blue darken-3" nuxt :loading="loadingGenerate">
          {{ !localId ? "Generate" : "Edit" }}
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-form>
  </div>
</template>
<script>
import AppBulkInput from "../atoms/AppBulkInput.vue";
import AppDatePicker from "../atoms/AppDatePicker.vue";
import MutuBetonForm from "../molecules/MutuBetonForm.vue";
import PemasokForm from "../molecules/PemasokForm.vue";
import PersonilForm from "../molecules/PersonilForm.vue";
import TbmItemsForm from '../molecules/TbmItemsForm.vue';
export default {
  components: {
    AppDatePicker,
    AppBulkInput,
    PemasokForm,
    MutuBetonForm,
    PersonilForm,
    TbmItemsForm,
  },
  props: {
    idTelusur: String,
  },
  data() {
    return {
      // form
      localId: "",
      no: "",
      noIzin: "",
      tanggalMasuk: null,
      pemasok: [],
      lokasiPengecoran: "",
      mutuBeton: [],
      personil: [],
      rules: {
        no: [(v) => !!v || "Harap diisi"],
        noIzin: [(v) => !!v || "Harap diisi"],
        tanggalMasuk: [(v) => !!v || "Harap diisi"],
        pemasok: [(v) => v.length >= 1 || "Harap diisi"],
        lokasiPengecoran: [(v) => !!v || "Harap diisi"],
        mutuBeton: [(v) => v.length >= 1 || "Harap diisi"],
        personil: [(v) => v.length >= 1 || "Harap diisi"],
      },
      // items
      items: [],
      // validity form
      form: false,
      // others
      loadingGenerate: false,
    };
  },
  computed: {
    display() {
      return `${this.items.length} ${this.label}`;
    },
  },
  async mounted() {
    // fetch telusur data
    const id = this.$route.query.id;
    if (id) {
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
                      as: "tbm"
                    }
                  }
                ]
              }),
            },
          })
          .then((res) => res?.data?.result);
        if (result.length >= 1) {
          const item = result?.[0]?.tbm?.[0];
          if(!item) return;
          this.localId = item._id;
          this.no = item.no;
          this.noIzin = item.noIzin;
          this.tanggalMasuk = item.tanggalMasuk;
          this.pemasok = item.pemasok;
          this.lokasiPengecoran = item.lokasiPengecoran;
          this.mutuBeton = item.mutuBeton;
          this.personil = item.personil;
          this.items = item.items;
        }
      } catch (err) {
        this.$swal(err?.response?.data || err?.message, "", "error");
      }
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
        return;
      };
      if (this.items.length < 1) {
        this.$swal("Harap isi detail minimal satu", "", "warning");
        window.scroll({
          top: +this.$refs.form.$el.offsetTop + 300,
          behavior: "smooth",
        });
        return;
      };
      this.loadingGenerate = true;
      try {
        const sendData = {
          no: this.no,
          idTelusur: this.idTelusur,
          noIzin: this.noIzin,
          tanggalMasuk: this.tanggalMasuk,
          pemasok: this.pemasok,
          lokasiPengecoran: this.lokasiPengecoran,
          mutuBeton: this.mutuBeton,
          personil: this.personil,
          items: this.items
        };
        let result;
        if(!this.localId){
          // if added
          result = await this.$axios
            .post("/api/TelusurBahanMasuk/create", sendData)
            .then((res) => res?.data?.result);
        }else{
          // if edit
          result = await this.$axios
            .patch("/api/TelusurBahanMasuk/update", {
              _id: this.localId,
              ...sendData
            })
            .then((res) => res?.data?.result);
        }
        this.localId = result._id;
        await this.$axios
          .patch("/api/Telusur/update", {
            _id: this.idTelusur,
            idTbm: this.localId
          })
          .then((res) => res?.data?.result);
        this.$swal("Berhasil", "", "success");
      } catch (err) {
        this.$swal(err?.response?.data || err?.message, "", "error");
      }
      this.loadingGenerate = false;
    },
  },
};
</script>
