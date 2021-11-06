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
              v-model="noForm"
              label="No. Formulir"
              placeholder="No. Formulir"
              outlined
              dense
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          nuxt
          :loading="loadingGenerate"
        >
          Generate
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      loadingGenerate: false,
    };
  },
  methods: {
    async generate() {
      this.loadingGenerate = true;
      try {
        const res = await this.$axios.post("/api/TelusurBahanMasuk/create", {
          _id: this.id,
        });
        alert(res?.data);
      } catch (err) {
        alert(err?.response?.data?.message || err?.message);
      }
      this.loadingGenerate = false;
    },
  },
};
</script>
