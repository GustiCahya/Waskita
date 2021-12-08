<template>
  <v-card>
    <v-card-title class="headline"> Telusur </v-card-title>
    <v-form
      ref="telusurForm"
      v-model="telusurForm"
      @submit.prevent="submitTelusur"
    >
      <v-card-text class="pt-3" style="padding-bottom: 0">
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="businessUnit"
              label="Business Unit"
              placeholder="Contoh: Infrastructure 2 Division"
              :rules="rules.businessUnit"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="proyek"
              label="Proyek"
              placeholder="Contoh: Pembangunan tol bekasi"
              :rules="rules.proyek"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="form"
              label="Form"
              placeholder="Contoh: PW-QTY-07-02-01"
              :rules="rules.form"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <app-date-picker
              v-model="rev"
              label="Rev"
              placeholder="Contoh: 02, Juni 2021"
              :rules="rules.rev"
              format="DD, MMMM YYYY"
              outlined
              dense
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions justify="center">
        <v-spacer />
        <v-btn
          type="submit"
          color="primary"
          class="mt-1 mb-3"
          nuxt
          :loading="loadingSubmit"
        >
          {{ !idTelusur ? "Generate" : "Edit" }}
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
export default {
  components: {
    AppDatePicker: () => import("~/components/atoms/AppDatePicker"),
  },
  props: {
    idTelusur: String,
  },
  data() {
    return {
      businessUnit: "",
      proyek: "",
      form: "PW-QTY-07-02-01",
      rev: "2021-06-02",
      rules: {
        businessUnit: [(v) => !!v || "Harus Diisi"],
        proyek: [(v) => !!v || "Harus Diisi"],
        form: [(v) => !!v || "Harus Diisi"],
        rev: [(v) => !!v || "Harus Diisi"],
      },
      telusurForm: false,
      loadingSubmit: false,
    };
  },
  async mounted() {
    const id = this.$route.query.id || this.idTelusur;
    try {
      // fetch previous telusur data
      const prevItem = await this.$axios
        .get("/api/Telusur/get", {
          params: {
            jsonQuery: JSON.stringify({
              pipeline: [
                {
                  $sort: {
                    _createdDate: -1,
                  },
                },
              ],
            }),
          },
        })
        .then((res) => res?.data?.result?.[0]);
      if (prevItem) {
        this.businessUnit = prevItem?.businessUnit;
        this.proyek = prevItem?.proyek;
      }
      // fetch telusur data
      if (id) {
        const result = await this.$axios
          .get("/api/Telusur/get", {
            params: {
              jsonQuery: JSON.stringify({
                _id: id,
              }),
            },
          })
          .then((res) => res?.data?.result);
        if (result.length >= 1) {
          const item = result[0];
          this.businessUnit = item.businessUnit;
          this.proyek = item.proyek;
          this.form = item.form;
          this.rev = item.rev;
        }
      }
    } catch (err) {
      this.$swal(err?.response?.data || err?.message, "", "warning");
    }
  },
  methods: {
    async submitTelusur() {
      this.$refs.telusurForm.validate();
      if (!this.telusurForm) return;
      this.loadingSubmit = true;
      try {
        const sendData = {
          businessUnit: this.businessUnit,
          proyek: this.proyek,
          form: this.form,
          rev: this.rev,
        };
        if (!this.idTelusur) {
          // if create
          const createdTelusur = await this.$axios
            .post("/api/Telusur/create", {
              ...sendData,
            })
            .then((res) => res?.data?.result);
          this.$emit("updateIdTelusur", createdTelusur._id);
          this.$swal("Berhasil", "", "success");
        } else {
          // if update
          const updatedTelusur = await this.$axios
            .patch("/api/Telusur/update", {
              _id: this.idTelusur,
              ...sendData,
            })
            .then((res) => res?.data?.result);
          this.$emit("updateIdTelusur", updatedTelusur._id);
          this.$swal("Edit Berhasil", "", "success");
        }
      } catch (err) {
        this.$swal(err?.response?.data || err?.message, "", "warning");
      }
      this.loadingSubmit = false;
    },
  },
};
</script>
