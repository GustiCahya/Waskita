<template>
  <Nuxt v-if="!loadingMount" />
</template>

<script>
export default {
  data() {
    return {
      loadingMount: true,
    }
  },
  async beforeMount() {
    this.loadingMount = true;
    try {
      const isLogin = await this.$isLogin();
      if (isLogin) {
        this.$router.replace("/home");
        return;
      }else{
        this.$logout();
      }
    } catch (err) {
      this.$swal(err?.response?.data?.message || err?.message, "", "warning");
    }
    this.loadingMount = false;
  },
};
</script>

<style></style>
