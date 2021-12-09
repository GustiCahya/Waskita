<template>
  <div>
    <v-form ref="form" v-model="form" @submit.prevent="submit">
      <v-text-field
        v-model="value"
        label="Dimensi"
        :rules="rules.value"
        outlined
        dense
      />
      <div class="d-flex justify-end mb-4">
        <v-btn
          v-if="id"
          class="text-right mx-2"
          color="grey darken-2"
          @click="clearInput"
        >
          Batal
        </v-btn>
        <v-btn type="submit" class="text-right" color="primary">
          {{ !id ? "Tambah" : "Edit" }}
        </v-btn>
      </div>
    </v-form>
    <v-simple-table v-if="items.length >= 1" dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">{{ label }}</th>
            <th class="text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in items" :key="item._id">
            <td>{{ item.value }}</td>
            <td>
              <v-btn color="yellow darken-3" icon @click="select(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn color="red" icon @click="remove(idx)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    label: String,
    items: Array,
  },
  data() {
    return {
      value: "15 x 30 cm",
      rules: {
        value: [(v) => !!v || "Harap diisi"],
      },
      id: undefined,
      form: false,
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate();
      if (!this.form) return;
      const send = {
        value: this.value,
      };
      if (!this.id) {
        // if adding
        const addedData = {
          _id: uuidv4(),
          ...send,
        };
        this.items.push(addedData);
      } else {
        // if editing
        const idx = this.items.findIndex((item) => item._id === this.id);
        this.items[idx].value = send.value;
      }
      this.clearInput();
    },
    select(item) {
      this.id = item._id;
      this.value = item.value;
    },
    remove(idx) {
      this.items.splice(idx, 1);
      this.clearInput();
    },
    clearInput() {
      this.value = "15 x 30 cm";
      this.id = undefined;
      this.$refs.form.resetValidation();
    },
  },
};
</script>
