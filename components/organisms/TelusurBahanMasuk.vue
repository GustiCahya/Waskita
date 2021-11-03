<template>
  <div>
    <v-card-title class="headline"> Telusur Bahan Masuk </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="generate">
        <v-text-field
          v-model="noForm"
          label="No. Formulir"
          outlined
          dense
        />
      </v-form>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      noForm: "",
      loadingGenerate: false,
    }
  },
  methods: {
    async generate() {
      console.log(this.noForm);
      this.loadingGenerate = true;
      try{
        const res = await this.$axios.post("/api/TelusurBahanMasuk/create", {
          _id: this.noForm
        });
        console.log(res?.data)
        alert(res?.data);
      }catch(err){
        alert(err?.response?.data?.message || err?.message);
      }
      this.loadingGenerate = false;
    }
  },
}
</script>
