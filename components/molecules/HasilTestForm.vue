<template>
  <div>
    <v-form ref="form" v-model="form" @submit.prevent="submit">
      <v-text-field
        v-model="judul"
        label="Judul"
        :rules="rules.judul"
        outlined
        dense
      />
      <v-file-input
        v-model="gambar"
        :rules="rules.gambar"
        accept="image/png, image/jpeg, image/bmp"
        label="Gambar (max: 5mb)"
        prepend-icon="mdi-image"
        outlined
        dense
      ></v-file-input>
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
            <th class="text-left">Judul</th>
            <th class="text-left">Gambar</th>
            <th class="text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in items" :key="item._id">
            <td>{{ item.judul }}</td>
            <td>
              <v-img class="white rounded-sm" max-width="30" :src="item.gambar"></v-img>
            </td>
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
    items: Array,
  },
  data() {
    return {
      judul: "",
      gambar: {},
      rules: {
        judul: [
          (v) => !!v || "Harap diisi",
        ],
        gambar: [
          (v) => !!v || "Harap diisi",
          (v) => v?.size ? v?.size < 5000000 || "Harus kurang dari 5mb!" : true,
        ],
      },
      id: undefined,
      form: false,
    };
  },
  methods: {
    async submit() {
      this.$refs.form.validate();
      if (!this.form) return;
      const encodedImg = await this.$toBase64(this.gambar);
      const send = {
        judul: this.judul,
        gambar: encodedImg,
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
        this.items[idx].judul = send.judul;
        this.items[idx].gambar = send.gambar;
      }
      this.clearInput();
    },
    select(item) {
      this.id = item._id;
      this.judul = item.judul;
    },
    remove(idx) {
      this.items.splice(idx, 1);
      this.clearInput();
    },
    clearInput() {
      this.judul = "";
      this.gambar = {};
      this.id = undefined;
      this.$refs.form.resetValidation();
    },
  },
};
</script>
