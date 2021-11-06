<template>
  <v-row justify="center" align="center" class="mb-10">
    <v-col cols="12">
      <telusur :id-telusur="idTelusur" @updateIdTelusur="updateIdTelusur" />
    </v-col>
    <v-col v-if="idTelusur" cols="12">
      <v-card>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :editable="true" edit-icon="mdi-check">
              Telusur Bahan Masuk
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="2" :editable="true" edit-icon="mdi-check">
              Telusur Benda Uji
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" :editable="true" edit-icon="mdi-check">
              Telusur Hasil Test
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="4" :editable="true" edit-icon="mdi-check">
              Telusur Proses
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
        <v-container>
          <telusur-bahan-masuk v-if="step === '1'" />
          <telusur-benda-uji v-if="step === '2'" />
          <telusur-hasil-test v-if="step === '3'" />
          <telusur-proses v-if="step === '4'" />
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  components: {
    Telusur: () => import("@/components/organisms/Telusur.vue"),
    TelusurBahanMasuk: () => import("@/components/organisms/TelusurBahanMasuk.vue"),
    TelusurBendaUji: () => import("@/components/organisms/TelusurBendaUji.vue"),
    TelusurHasilTest: () => import("@/components/organisms/TelusurHasilTest.vue"),
    TelusurProses: () => import("@/components/organisms/TelusurProses.vue"),
  },
  data() {
    return {
      idTelusur: "",
      step: "1"
    }
  },
  watch: {
    idTelusur(val){
      alert(val);
    }
  },
  mounted() {
    console.log(this.idTelusur);
  },
  methods: {
    updateIdTelusur(id){
      this.idTelusur = id;
    }
  }
}
</script>
