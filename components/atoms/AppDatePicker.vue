<template>
  <div>
    <v-menu
      v-model="dateMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :label="label"
          :placeholder="placeholder"
          append-icon="mdi-calendar"
          :value="dateDisplay"
          :rules="rules"
          readonly
          outlined
          dense
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="model"
        locale="en-in"
        no-title
        color="primary"
        @input="dateMenu = false"
      ></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "AppDatePicker",
  props: {
    label: {
      type: String,
      default: "Date",
    },
    placeholder: {
      type: String,
      default: "Date",
    },
    value: {
      type: [String, Date],
      default: null,
    },
    rules: Array,
    format: {
      type: String,
      default: "DD MMMM YYYY",
    },
  },
  data() {
    return {
      dateMenu: false,
    };
  },
  computed: {
    model: {
      get() {
        return this?.value ? new Date(this.value)?.toISOString()?.substr(0, 10) : "";
      },
      set(value) {
        const dateValue = new Date(value);
        this.$emit("input", dateValue);
      },
    },
    dateDisplay() {
      return this?.value
        ? this.$moment(this.value).format(this.format)
        : "";
    },
  }
};
</script>
