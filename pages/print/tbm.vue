<template>
  <v-card class="pa-3">
    <v-card-title>
      <v-spacer />
      <v-btn color="grey darken-3" nuxt @click="redirectPrint">
        <v-icon left dark> mdi-printer </v-icon>
        Print
      </v-btn>
    </v-card-title>
    <v-card-text> testing </v-card-text>
  </v-card>
</template>
<script>
export default {
  mounted() {
    console.log("testing");
  },
};
</script>
