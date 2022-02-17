<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
      scrollable
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :label="label"
          :placeholder="placeholder"
          append-icon="mdi-plus-box-multiple"
          :value="display"
          :rules="rules"
          readonly
          outlined
          dense
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>

      <v-card>
        <v-card-title class="text-h5 blue darken-4 white--text">
          Kelola {{ label }}
        </v-card-title>

        <v-card-text class="py-4">
          <slot />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "AppBulkInput",
  model: {
    prop: "items",
    event: "input"
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: null,
    },
    rules: Array,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    model: {
      get() {
        return this?.items;
      },
      set(items) {
        this.$emit("input", items);
      },
    },
    display() {
      return this.items?.length >= 1 ? `${this.items?.length || 0} ${this.label}` : '';
    }
  }
};
</script>
