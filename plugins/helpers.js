import Vue from "vue";
import VueJwtDecode from 'vue-jwt-decode';
import CryptoJS from 'crypto-js';
import SecureStorage from "secure-web-storage";

Vue.mixin({
  computed: {
    $secureStorage() {
      const SECRET_KEY = process.env.NUXT_ENV_SECRET_STORAGE;
      const secureStorage = new SecureStorage(localStorage, {
        hash: function hash(key) {
          key = CryptoJS.SHA256(key, SECRET_KEY);
          return key.toString();
        },
        encrypt: function encrypt(data) {
          data = CryptoJS.AES.encrypt(data, SECRET_KEY);
          data = data.toString();
          return data;
        },
        decrypt: function decrypt(data) {
          data = CryptoJS.AES.decrypt(data, SECRET_KEY);
          data = data.toString(CryptoJS.enc.Utf8);
          return data;
        },
      });
      return secureStorage;
    },
    $user() {
      const token = this.$secureStorage.getItem("token");
      return VueJwtDecode.decode(token);
    },
  },
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
      const token = this.$secureStorage.getItem("token");
      return VueJwtDecode.decode(token);
    },
    async $getUserRoles() {
      try{
        const email = this.$getUserData()?.email;
        const roles = await this.$axios.get("api/Users/getRoles", {
          params: { email: email.toLowerCase() }
        }).then(res => res?.data?.result);
        return roles;
      }catch(err){
        this.$swal(err?.response?.data?.message || err?.message);
        this.$logout();
      }
    },
    async $isLogin() {
      const token = this.$secureStorage.getItem("token");
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
      this.$secureStorage.removeItem("token");
      this.$router.replace("/");
    },
    $convertPercenttoDecimal(percent){
      return (+percent.replace(",", ".").replace("%", "") / 100) || 0
    }
  },
});
