<template>
  <v-card class="mt-3" color="$isDark ? 'grey darken-4' : ''">
    <v-card-title class="my-2 mb-3"> Kelola Detail </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-select
              v-model="kodeSilinder"
              :rules="rules.kodeSilinder"
              :items="listKodeSilinder"
              :menu-props="{ offsetY: true }"
              label="Kode Silinder"
              placeholder="Kode Silinder"
              dense
              outlined
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
              @dblclick="fetchHasilDensity"
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="hasilTekan"
              label="Hasil Tekan"
              :rules="rules.hasilTekan"
              outlined
              dense
              @dblclick="fetchHasilTekan"
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
              <th class="text-left">Hasil Density</th>
              <th class="text-left">Hasil Tekan</th>
              <th class="text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in items" :key="item._id">
              <td>{{ item.kodeSilinder }}</td>
              <td>{{ item.hasilDensity }}</td>
              <td>{{ item.hasilTekan }}</td>
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
    idTelusur: String,
    items: Array,
  },
  data() {
    return {
      kodeSilinder: "",
      hasilDensity: null,
      hasilTekan: null,
      tanggalPembuatan: null,
      tanggalPengetesan: null,
      umurHari: "",
      perkiraanDensity: "Min 2,2",
      perkiraanTekan: "Min 65%",
      rules: {
        kodeSilinder: [(v) => !!v || "Harap diisi"],
        tanggalPembuatan: [],
        tanggalPengetesan: [],
        umurHari: [],
        perkiraanDensity: [],
        perkiraanTekan: [],
        hasilDensity: [
          (v) => !!v || "Harap diisi",
          (v) => /^\d*,?\d*$/gi.test(v) || "Harus Angka (contoh: 16 atau 16,5)",
        ],
        hasilTekan: [
          (v) => !!v || "Harap diisi",
          (v) =>
            /^\d*,?\d*%$/gi.test(v) || "Harus Persen (contoh: 23% atau 23,5%)",
        ],
      },
      id: undefined,
      form: false,
      // additional information
      listKodeSilinder: [],
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
  async mounted() {
    // fetch telusur data
    const id = this.$route.query.id || this.idTelusur;
    if (id) {
      try {
        // telusur benda uji
        const result = await this.$axios
          .get("/api/Telusur/get", {
            params: {
              jsonQuery: JSON.stringify({
                _id: id,
                pipeline: [
                  {
                    $lookup: {
                      from: "TelusurBendaUji",
                      localField: "idTbu",
                      foreignField: "_id",
                      as: "tbu",
                    },
                  },
                  {
                    $unwind: { path: "$tbu", preserveNullAndEmptyArrays: true }
                  },
                  {
                    $lookup: {
                      from: "TelusurBahanMasuk",
                      localField: "idTbm",
                      foreignField: "_id",
                      as: "tbm",
                    },
                  },
                  {
                    $unwind: { path: "$tbm", preserveNullAndEmptyArrays: true }
                  },
                  {
                    $project: {
                      "tbm.tanggalMasuk": 1,
                      "tbu.items.kodeSilinder": 1,
                    }
                  }
                ],
              }),
            },
          })
          .then((res) => res?.data?.result);
        const tbm = result?.[0]?.tbm;
        if (tbm) {
          this.tanggalPembuatan = tbm?.tanggalMasuk;
        }
        const tbu = result?.[0]?.tbu;
        if (tbu) {
          const items = tbu?.items || [];
          this.listKodeSilinder = items.map((item) => item.kodeSilinder);
        }
      } catch (err) {
        this.$swal(err?.response?.data || err?.message, "", "error");
      }
    }
  },
  methods: {
    getDaysDiff() {
      if (this?.tanggalPembuatan && this?.tanggalPengetesan) {
        const date1 = new Date(this?.tanggalPembuatan);
        const date2 = new Date(this?.tanggalPengetesan);
        const difference = date2.getTime() - date1.getTime();
        const days = Math.ceil(difference / (1000 * 3600 * 24));
        if (days >= 28) {
          this.perkiraanTekan = "Min 100%";
        } else {
          this.perkiraanTekan = "Min 65%";
        }
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
      // this.tanggalPembuatan = null;
      this.tanggalPengetesan = null;
      this.umurHari = "";
      this.perkiraanDensity = "Min 2,2";
      this.perkiraanTekan = "Min 65%";
      this.hasilDensity = null;
      this.hasilTekan = null;
      this.$refs.form.resetValidation();
    },
    fetchHasilDensity() {
      this.hasilDensity = this.items?.[this.items.length - 1]?.hasilDensity;
    },
    fetchHasilTekan() {
      this.hasilTekan = this.items?.[this.items.length - 1]?.hasilTekan;
    },
  },
};
</script>
