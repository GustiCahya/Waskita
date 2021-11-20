<template>
  <v-row class="ma-2">
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline"> Reset Password </v-card-title>
        <v-card-text class="mt-6">
          <v-form
            ref="resetPasswordForm"
            v-model="resetPasswordForm"
            @submit.prevent="resetPassword"
          >
            <v-row justify="center">
              <v-col cols="12" class="px-2 py-0">
                <v-text-field
                  v-model="oldPassword"
                  label="Password Lama Anda"
                  :rules="rules.oldPassword"
                  type="password"
                  dense
                  outlined
                />
              </v-col>
              <v-col cols="12" class="px-2 py-0">
                <v-text-field
                  v-model="password"
                  label="Password Baru"
                  :rules="rules.password"
                  type="password"
                  dense
                  outlined
                />
              </v-col>
              <v-col cols="12" class="px-2 py-0">
                <v-text-field
                  v-model="cPassword"
                  label="Konfirmasi Password Baru"
                  :rules="rules.cPassword"
                  type="password"
                  dense
                  outlined
                />
              </v-col>
              <v-col cols="12" class="px-2 pb-8 d-flex justify-center">
                <v-btn type="submit" color="primary"> Ganti Password </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: "dashboard",
  data() {
    return {
      oldPassword: "",
      password: "",
      cPassword: "",
      rules: {
        oldPassword: [(v) => !!v || "Harap Diisi"],
        password: [(v) => !!v || "Harap Diisi"],
        cPassword: [
          (v) => !!v || "Harap Diisi",
          (v) =>
            v === this.password || "Harus Sama dengan Password Baru Anda",
        ],
      },
      resetPasswordForm: false,
    };
  },
  methods: {
    async resetPassword() {
      try {
        this.$refs.resetPasswordForm.validate();
        if (!this.resetPasswordForm) return;
        const email = this.$getUserData()?.email;
        const data = await this.$axios.post("/api/Users/resetPassword", {
            email,
            password: this.password,
            oldPassword: this.oldPassword
        }).then(res => res?.data);
        if (data?.success) {
            this.$swal("Password berhasil dirubah", "", "success");
            this.clear();
        }
      } catch (err) {
        this.$swal(err?.response?.data?.message || err?.message, "", "warning");
      }
    },
    clear() {
        this.oldPassword = "";
        this.password = "";
        this.cPassword = "";
        this.$refs.resetPasswordForm.resetValidation();
    }
  },
};
</script>
