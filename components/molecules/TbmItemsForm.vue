<template>
  <v-card class="mt-3" color="grey darken-4">
    <v-card-title class="my-2 mb-3"> Kelola Detail </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="noKendaraan"
              label="Nomor Kendaraan"
              :rules="rules.noKendaraan"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="noDocket"
              label="Nomor Docket"
              :rules="rules.noDocket"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="jamKeluar"
              label="Jam Keluar"
              :rules="rules.jamKeluar"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="jamDituang"
              label="Jam Dituang"
              :rules="rules.jamDituang"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="volAktual"
              label="Vol Aktual"
              :rules="rules.volAktual"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="volKumulatif"
              label="Vol Kumulatif"
              :rules="rules.volKumulatif"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="tempMasuk"
              label="Temp Masuk"
              :rules="rules.tempMasuk"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="slumpBeton"
              label="Slump Beton"
              :rules="rules.slumpBeton"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="syaratSlump"
              label="Syarat Slump"
              :rules="rules.syaratSlump"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0"> </v-col>
        </v-row>
        <div class="d-flex justify-end mb-4">
          <v-btn type="submit" class="text-right" color="primary">
            {{ !id ? "Tambah" : "Edit" }}
          </v-btn>
        </div>
      </v-form>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">No. Kendaraan</th>
              <th class="text-left">No. Docket</th>
              <th class="text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in items" :key="item._id">
              <td>{{ item.noKendaraan }}</td>
              <td>{{ item.noDocket }}</td>
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
    </v-card-text>
  </v-card>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      noKendaraan: "",
      noDocket: "",
      jamKeluar: null,
      jamDituang: null,
      volAktual: null,
      volKumulatif: null,
      tempMasuk: "",
      slumpBeton: "",
      syaratSlump: "18 ± 2",
      rules: {
        noKendaraan: [(v) => !!v || "Harap diisi"],
        noDocket: [(v) => !!v || "Harap diisi"],
        jamKeluar: [(v) => !!v || "Harap diisi"],
        jamDituang: [(v) => !!v || "Harap diisi"],
        volAktual: [(v) => !!v || "Harap diisi"],
        volKumulatif: [(v) => !!v || "Harap diisi"],
        tempMasuk: [],
        slumpBeton: [],
        syaratSlump: [(v) => !!v || "Harap diisi"],
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
        noKendaraan: this.noKendaraan,
        noDocket: this.noDocket,
        jamKeluar: this.jamKeluar,
        jamDituang: this.jamDituang,
        volAktual: this.volAktual,
        volKumulatif: this.volKumulatif,
        tempMasuk: this.tempMasuk,
        slumpBeton: this.slumpBeton,
        syaratSlump: this.syaratSlump,
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
        this.items[idx].noKendaraan = send.noKendaraan;
        this.items[idx].noDocket = send.noDocket;
        this.items[idx].jamKeluar = send.jamKeluar;
        this.items[idx].jamDituang = send.jamDituang;
        this.items[idx].volAktual = send.volAktual;
        this.items[idx].volKumulatif = send.volKumulatif;
        this.items[idx].tempMasuk = send.tempMasuk;
        this.items[idx].slumpBeton = send.slumpBeton;
        this.items[idx].syaratSlump = send.syaratSlump;
      }
      this.clearInput();
    },
    select(item) {
      this.id = item._id;
      this.noKendaraan = item.noKendaraan;
      this.noDocket = item.noDocket;
      this.jamKeluar = item.jamKeluar;
      this.jamDituang = item.jamDituang;
      this.volAktual = item.volAktual;
      this.volKumulatif = item.volKumulatif;
      this.tempMasuk = item.tempMasuk;
      this.slumpBeton = item.slumpBeton;
      this.syaratSlump = item.syaratSlump;
    },
    remove(idx) {
      this.items.splice(idx, 1);
      this.clearInput();
    },
    clearInput() {
      this.id = undefined;
      this.noKendaraan = "";
      this.noDocket = "";
      this.jamKeluar = null;
      this.jamDituang = null;
      this.volAktual = null;
      this.volKumulatif = null;
      this.tempMasuk = "";
      this.slumpBeton = "";
    //   this.syaratSlump = "";
      this.$refs.form.resetValidation();
    },
  },
};
</script>
