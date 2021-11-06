<template>
  <div>
    <v-card-title class="headline"> Telusur Bahan Masuk </v-card-title>
    <v-form @submit.prevent="generate">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="id"
              label="No. Formulir"
              placeholder="No. Formulir"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="noIzin"
              label="No. Izin"
              placeholder="No. Izin"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="tanggalMasuk"
              label="Tanggal Masuk"
              placeholder="Tanggal Masuk"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="pemasok"
              label="Pemasok"
              placeholder="Pemasok"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="lokasiPengecoran"
              label="Lokasi Pengecoran"
              placeholder="Lokasi Pengecoran"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="mutuBeton"
              label="Mutu Beton"
              placeholder="Mutu Beton"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="personil"
              label="Personil"
              placeholder="Personil"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" nuxt :loading="loadingGenerate">
          Generate
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>
<script>
export default {
  props: {
    idTelusur: String
  },
  data() {
    return {
      // form
      id: "",
      noIzin: "",
      tanggalMasuk: null,
      pemasok: [],
      lokasiPengecoran: "",
      mutuBeton: [],
      personil: [],
      // others
      loadingGenerate: false,
    };
  },
  methods: {
    async generate() {
      this.loadingGenerate = true;
      try {
        const sendData = {};
        const result = await this.$axios
          .post("/api/TelusurBahanMasuk/create", sendData)
          .then((res) => res?.data?.result);
        alert(result);
      } catch (err) {
        alert(err?.response?.data?.message || err?.message);
      }
      this.loadingGenerate = false;
    },
  },
};
</script>
