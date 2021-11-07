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
          <telusur-bahan-masuk v-if="step === '1'" :id-telusur="idTelusur" />
          <telusur-benda-uji v-if="step === '2'" :id-telusur="idTelusur" />
          <telusur-hasil-test v-if="step === '3'" :id-telusur="idTelusur" />
          <telusur-proses v-if="step === '4'" :id-telusur="idTelusur" />
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  components: {
    Telusur: () => import("@/components/organisms/Telusur.vue"),
    TelusurBahanMasuk: () =>
      import("@/components/organisms/TelusurBahanMasuk.vue"),
    TelusurBendaUji: () => import("@/components/organisms/TelusurBendaUji.vue"),
    TelusurHasilTest: () =>
      import("@/components/organisms/TelusurHasilTest.vue"),
    TelusurProses: () => import("@/components/organisms/TelusurProses.vue"),
  },
  data() {
    return {
      idTelusur: "",
      step: "1",
    };
  },
  watch: {
    idTelusur(val) {
      alert(val);
    },
  },
  async mounted() {
    // check availability of id telusur
    const id = this.$route.query.id;
    if (id) {
      try {
        const count = await this.$axios
          .get("/api/Telusur/count", {
            params: {
              jsonQuery: JSON.stringify({
                _id: id,
              }),
            },
          })
          .then((res) => res?.data?.result);
        if (count >= 1) {
          this.idTelusur = id;
        } else {
          this.$swal("Maaf, id telusur tidak ditemukan", "", "warning");
        }
      } catch (err) {
        this.$swal(err.message, "", "error");
      }
    }
  },
  methods: {
    updateIdTelusur(id) {
      this.idTelusur = id;
    },
  },
};
</script>
