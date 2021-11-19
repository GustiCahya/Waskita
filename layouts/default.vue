<template>
  <Nuxt />
</template>

<script>
export default {
  async beforeMount() {
    const isLogin = await this.$isLogin();
    if (isLogin) {
      this.$router.replace("/telusur");
    }else{
      this.$logout();
    }
  },
};
</script>

<style></style>
