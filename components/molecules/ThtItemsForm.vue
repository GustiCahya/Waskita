<template>
  <v-card class="mt-3" color="grey darken-4">
    <v-card-title class="my-2 mb-3"> Kelola Detail </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="kodeSilinder"
              label="Kode Silinder"
              :rules="rules.kodeSilinder"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0"></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <app-date-picker
              v-model="tanggalPembuatan"
              :rules="rules.tanggalPembuatan"
              label="Tanggal Pembuatan"
              placeholder="Tanggal Pembuatan"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <app-date-picker
              v-model="tanggalPengetesan"
              :rules="rules.tanggalPengetesan"
              label="Tanggal Pengetesan"
              placeholder="Tanggal Pengetesan"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="py-0">
            <v-text-field
              v-model="umurHari"
              label="Umur Hari Saat Pengetesan"
              :rules="rules.umurHari"
              readonly
              disabled
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="perkiraanDensity"
              label="Perkiraan Density"
              :rules="rules.perkiraanDensity"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="perkiraanTekan"
              label="Perkiraan Tekan"
              :rules="rules.perkiraanTekan"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="hasilDensity"
              label="Hasil Density"
              :rules="rules.hasilDensity"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="hasilTekan"
              label="Hasil Tekan"
              :rules="rules.hasilTekan"
              outlined
              dense
            />
          </v-col>
        </v-row>
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
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Kode Silinder</th>
              <th class="text-left">Umur Hari</th>
              <th class="text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in items" :key="item._id">
              <td>{{ item.kodeSilinder }}</td>
              <td>{{ item.umurHari }}</td>
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
import AppDatePicker from "../atoms/AppDatePicker.vue";
export default {
  components: {
    AppDatePicker,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      kodeSilinder: "",
      tanggalPembuatan: null,
      tanggalPengetesan: null,
      umurHari: "",
      perkiraanDensity: "",
      perkiraanTekan: "",
      hasilDensity: null,
      hasilTekan: null,
      rules: {
        kodeSilinder: [(v) => !!v || "Harap diisi"],
        tanggalPembuatan: [(v) => !!v || "Harap diisi"],
        tanggalPengetesan: [(v) => !!v || "Harap diisi"],
        umurHari: [(v) => !!v || "Harap diisi"],
        perkiraanDensity: [(v) => !!v || "Harap diisi"],
        perkiraanTekan: [(v) => !!v || "Harap diisi"],
        hasilDensity: [
          (v) => !!v || "Harap diisi",
          (v) =>
            /^\d*\.?\d*$/gi.test(v) || "Harus Angka (contoh: 16 atau 16.5)",
        ],
        hasilTekan: [
          (v) => !!v || "Harap diisi",
          (v) =>
            /^\d*\.?\d*$/gi.test(v) || "Harus Angka (contoh: 16 atau 16.5)",
        ],
      },
      id: undefined,
      form: false,
    };
  },
  watch: {
    tanggalPembuatan() {
      this.getDaysDiff();
    },
    tanggalPengetesan() {
      this.getDaysDiff();
    },
  },
  methods: {
    getDaysDiff() {
      if (this?.tanggalPembuatan && this?.tanggalPengetesan) {
        const date1 = new Date(this?.tanggalPembuatan);
        const date2 = new Date(this?.tanggalPengetesan);
        const difference = date2.getTime() - date1.getTime();
        const days = Math.ceil(difference / (1000 * 3600 * 24));
        this.umurHari = `${days} Hari`;
      }
    },
    submit() {
      this.$refs.form.validate();
      if (!this.form) return;
      const send = {
        kodeSilinder: this.kodeSilinder,
        tanggalPembuatan: this.tanggalPembuatan,
        tanggalPengetesan: this.tanggalPengetesan,
        umurHari: this.umurHari,
        perkiraanDensity: this.perkiraanDensity,
        perkiraanTekan: this.perkiraanTekan,
        hasilDensity: this.hasilDensity,
        hasilTekan: this.hasilTekan,
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
        this.items[idx].kodeSilinder = send.kodeSilinder;
        this.items[idx].tanggalPembuatan = send.tanggalPembuatan;
        this.items[idx].tanggalPengetesan = send.tanggalPengetesan;
        this.items[idx].umurHari = send.umurHari;
        this.items[idx].perkiraanDensity = send.perkiraanDensity;
        this.items[idx].perkiraanTekan = send.perkiraanTekan;
        this.items[idx].hasilDensity = send.hasilDensity;
        this.items[idx].hasilTekan = send.hasilTekan;
      }
      this.clearInput();
    },
    select(item) {
      this.id = item._id;
      this.kodeSilinder = item.kodeSilinder;
      this.tanggalPembuatan = item.tanggalPembuatan;
      this.tanggalPengetesan = item.tanggalPengetesan;
      this.umurHari = item.umurHari;
      this.perkiraanDensity = item.perkiraanDensity;
      this.perkiraanTekan = item.perkiraanTekan;
      this.hasilDensity = item.hasilDensity;
      this.hasilTekan = item.hasilTekan;
    },
    remove(idx) {
      this.items.splice(idx, 1);
      this.clearInput();
    },
    clearInput() {
      this.id = undefined;
      this.kodeSilinder = "";
      this.tanggalPembuatan = null;
      this.tanggalPengetesan = null;
      this.umurHari = "";
      this.perkiraanDensity = "";
      this.perkiraanTekan = "";
      this.hasilDensity = null;
      this.hasilTekan = null;
      this.$refs.form.resetValidation();
    },
  },
};
</script>
