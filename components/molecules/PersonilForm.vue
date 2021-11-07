<template>
  <div>
    <v-form
      ref="form"
      v-model="form"
      @submit.prevent="submit"
    >
      <v-text-field
        v-model="nama"
        label="Nama"
        :rules="rules.nama"
        outlined
        dense
      />
      <v-text-field
        v-model="ttd"
        label="TTD"
        :rules="rules.ttd"
        outlined
        dense
      />
      <div class="d-flex justify-end mb-4">
        <v-btn type="submit" class="text-right" color="primary">
          {{ !id ? "Tambah" : "Edit" }}
        </v-btn>
      </div>
    </v-form>
    <v-simple-table v-if="items.length >= 1" dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nama</th>
            <th class="text-left">TTD</th>
            <th class="text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in items" :key="item._id">
            <td>{{ item.nama }}</td>
            <td>{{ item.ttd }}</td>
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
    items: Array
  },
  data() {
    return {
      nama: "",
      ttd: "",
      rules: {
        nama: [(v) => !!v || "Harap diisi"],
        ttd: [(v) => !!v || "Harap diisi"],
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
        nama: this.nama,
        ttd: this.ttd,
      };
      if (!this.id) {
        // if adding
        const pemasok = {
          _id: uuidv4(),
          ...send,
        };
        this.items.push(pemasok);
      } else {
        // if editing
        const idx = this.items.findIndex((item) => item._id === this.id);
        this.items[idx].nama = send.nama;
        this.items[idx].ttd = send.ttd;
      }
      this.clearInput();
    },
    select(item) {
      this.id = item._id;
      this.nama = item.nama;
      this.ttd = item.ttd;
    },
    remove(idx) {
      this.items.splice(idx, 1);
      this.clearInput();
    },
    clearInput() {
      this.nama = "";
      this.ttd = "";
      this.id = undefined;
      this.$refs.form.resetValidation();
    },
  },
};
</script>
