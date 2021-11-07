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
        :value="time"
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
      v-model="time"
      color="white--text"
      full-width
    ></v-time-picker>
  </v-menu>
</template>
<script>
export default {
  model: {
    prop: "value",
    event: "input"
  },
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
      time: this.value,
      timeMenu: false,
    };
  },
  computed: {
    model: {
      get() {
        return this?.value; // Returning String "##:##"
      },
      set() {
        this.$emit("input", this.time);
      },
    }
  }
};
</script>
