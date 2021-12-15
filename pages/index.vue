<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Waskita Login</v-toolbar-title>
              </v-toolbar>
              <v-form
                ref="authForm"
                v-model="authForm"
                @submit.prevent="submit"
              >
                <v-card-text>
                  <v-text-field
                    v-model.trim="email"
                    :rules="rules.email"
                    prepend-icon="mdi-account"
                    name="email"
                    label="Email"
                    type="email"
                    required
                  />
                  <v-text-field
                    id="password"
                    v-model.trim="password"
                    :rules="rules.password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                    required
                  />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    type="submit"
                    :loading="isLoading"
                    :disabled="isLoading"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  layout: "default",
  data() {
    return {
      email: "",
      password: "",
      rules: {
        email: [
          (v) => !!v || "Harap Diisi",
          (v) =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "Harus email",
        ],
        password: [(v) => !!v || "Harap Diisi"],
      },
      authForm: false,
      isLoading: false,
    };
  },
  methods: {
    async submit() {
      this.$refs.authForm.validate();
      if (!this.authForm) return;
      this.isLoading = true;
      try {
        const result = await this.$axios
          .post("/api/Users/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => res?.data?.result);
        this.$secureStorage.setItem("token", result?.key?.accessToken);
        this.$router.replace("/telusur");
      } catch (err) {
        this.$swal(err?.response?.data?.message || err.message, "", "warning");
      }
      this.isLoading = false;
    },
  },
};
</script>
<style>
#app {
  background: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url("@/static/images/background_3.jpeg") no-repeat center fixed !important;
  background-size: cover;
  background-size: 100%;
}
</style>
