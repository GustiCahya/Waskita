<template>
  <v-menu
    ref="menu"
    v-model="timeMenu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="value"
        :label="label"
        :placeholder="placeholder"
        :rules="rules"
        append-icon="mdi-clock-time-four-outline"
        readonly
        dense
        outlined
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="timeMenu"
      v-model="model"
      color="white--text"
      full-width
    ></v-time-picker>
  </v-menu>
</template>
<script>
export default {
  props: {
    value: String,
    label: {
      type: String,
      default: "Time",
    },
    placeholder: {
      type: String,
      default: "Time",
    },
    rules: Array,
  },
  data() {
    return {
      timeMenu: false,
    };
  },
  computed: {
    model: {
      get() {
        return this?.value; // Returning String "##:##"
      },
      set(value) {
        this.$emit("input", value);
      },
    }
  }
};
</script>
