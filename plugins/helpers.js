import Vue from "vue";
import VueJwtDecode from 'vue-jwt-decode';
Vue.mixin({
  methods: {
    $toBase64(file) {
      if (file?.size) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      }
      return "";
    },
    $getUserData() {
      const token = this.$cookies.get("token");
      return VueJwtDecode.decode(token);
    },
    async $getUserRoles() {
      const email = this.$getUserData()?.email;
      const roles = await this.$axios.get("api/Users/getRoles", {
        params: { email: email.toLowerCase() }
      }).then(res => res?.data?.result);
      return roles;
    },
    async $isLogin() {
      const token = this.$cookies.get("token");
      const isLogin = await this.$axios
        .get("/api/Users/isLogin", {
          params: {
            token,
          },
        })
        .then((res) => res?.data?.result)
        .catch(() => false);
      return isLogin;
    },
    $logout() {
      this.$cookies.remove("token");
      this.$router.replace("/");
    },
  },
});
