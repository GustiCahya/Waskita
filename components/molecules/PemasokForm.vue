<template>
  <div>
    <v-form
      ref="formPemasok"
      v-model="formPemasok"
      @submit.prevent="submitPemasok"
    >
      <v-text-field
        v-model="nama"
        label="nama"
        :rules="rulesPemasok.nama"
        outlined
        dense
      />
      <v-text-field
        v-model="alamat"
        label="alamat"
        :rules="rulesPemasok.alamat"
        outlined
        dense
      />
      <div class="d-flex justify-end mb-4">
        <v-btn
          v-if="idPemasok"
          class="text-right mx-2"
          color="grey darken-2"
          @click="clearInputPemasok"
        >
          Batal
        </v-btn>
        <v-btn type="submit" class="text-right" color="primary">
          {{ !idPemasok ? "Tambah" : "Edit" }}
        </v-btn>
      </div>
    </v-form>
    <v-simple-table v-if="items.length >= 1" dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nama</th>
            <th class="text-left">Alamat</th>
            <th class="text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in items" :key="item._id">
            <td>{{ item.nama }}</td>
            <td>{{ item.alamat }}</td>
            <td>
              <v-btn color="yellow darken-3" icon @click="selectPemasok(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn color="red" icon @click="removePemasok(idx)">
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
    items: Array,
  },
  data() {
    return {
      // pemasok
      nama: "",
      alamat: "",
      rulesPemasok: {
        nama: [(v) => !!v || "Harap diisi"],
        alamat: [(v) => !!v || "Harap diisi"],
      },
      idPemasok: undefined,
      formPemasok: false,
    };
  },
  methods: {
    // pemasok
    submitPemasok() {
      this.$refs.formPemasok.validate();
      if (!this.formPemasok) return;
      const send = {
        nama: this.nama,
        alamat: this.alamat,
      };
      if (!this.idPemasok) {
        // if adding
        const pemasok = {
          _id: uuidv4(),
          ...send,
        };
        this.items.push(pemasok);
      } else {
        // if editing
        const idx = this.items.findIndex((item) => item._id === this.idPemasok);
        this.items[idx].nama = send.nama;
        this.items[idx].alamat = send.alamat;
      }
      this.clearInputPemasok();
    },
    selectPemasok(item) {
      this.idPemasok = item._id;
      this.nama = item.nama;
      this.alamat = item.alamat;
    },
    removePemasok(idx) {
      this.items.splice(idx, 1);
      this.clearInputPemasok();
    },
    clearInputPemasok() {
      this.nama = "";
      this.alamat = "";
      this.idPemasok = undefined;
      this.$refs.formPemasok.resetValidation();
    },
  },
};
</script>
