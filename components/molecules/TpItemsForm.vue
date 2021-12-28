<template>
  <v-card class="mt-3" color="grey darken-4">
    <v-card-title class="my-2 mb-3"> Kelola Detail </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-select
              v-model="jamMulai"
              :items="listJamMulai"
              :menu-props="{ offsetY: true }"
              label="Jam Mulai"
              placeholder="Jam Mulai"
              dense
              outlined
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="jamSelesai"
              label="Jam Selesai"
              :rules="rules.jamSelesai"
              outlined
              dense
              @dblclick="fetchJamSelesai"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="jumlahPekerja"
              label="Jumlah Pekerja"
              :rules="rules.jumlahPekerja"
              outlined
              dense
              @dblclick="fetchJumlahPekerja"
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="cuaca"
              label="Cuaca"
              :rules="rules.cuaca"
              outlined
              dense
              @dblclick="fetchCuaca"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="penggetarTipe"
              label="Tipe Penggetar"
              :rules="rules.penggetarTipe"
              outlined
              dense
              @dblclick="fetchPenggetarTipe"
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="penggetarJumlah"
              label="Jumlah Penggetar"
              :rules="rules.penggetarJumlah"
              outlined
              dense
              @dblclick="fetchPenggetarJumlah"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="finishing"
              label="Finishing"
              :rules="rules.finishing"
              outlined
              dense
              @dblclick="fetchFinishing"
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="curingSistem"
              label="Curing Sistem"
              :rules="rules.curingSistem"
              outlined
              dense
              @dblclick="fetchCuringSistem"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="curingLama"
              label="Curing Lama"
              :rules="rules.curingLama"
              outlined
              dense
              @dblclick="fetchCuringLama"
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
              <th class="text-left">Jam Mulai</th>
              <th class="text-left">Jam Selesai</th>
              <th class="text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in items" :key="item._id">
              <td>{{ item.jamMulai }}</td>
              <td>{{ item.jamSelesai }}</td>
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
  components: {},
  props: {
    idTelusur: String,
    items: Array,
  },
  data() {
    return {
      jamMulai: "",
      jamSelesai: "",
      jumlahPekerja: "",
      cuaca: "",
      penggetarTipe: "",
      penggetarJumlah: "",
      finishing: "",
      curingSistem: "",
      curingLama: "",
      listJamMulai: [],
      rules: {
        jamMulai: [
          (v) => !!v || "Harap diisi",
          (v) => /^\d\d:\d\d$/gi.test(v) || "Harus berupa jam (contoh: 11:31)",
        ],
        jamSelesai: [
          (v) => !!v || "Harap diisi",
          (v) => /^\d\d:\d\d$/gi.test(v) || "Harus berupa jam (contoh: 11:31)",
        ],
        jumlahPekerja: [
          (v) =>
            /^\d*,?\d*$/gi.test(v === null ? "" : v) ||
            "Harus Angka (contoh: 16 atau 16,5)",
        ],
        cuaca: [],
        penggetarTipe: [],
        penggetarJumlah: [
          (v) =>
            /^\d*,?\d*$/gi.test(v === null ? "" : v) ||
            "Harus Angka (contoh: 16 atau 16,5)",
        ],
        finishing: [],
        curingSistem: [],
        curingLama: [],
      },
      id: undefined,
      form: false,
    };
  },
  async mounted() {
    // fetch telusur data
    const id = this.$route.query.id || this.idTelusur;
    if (id) {
      try {
        const result = await this.$axios
          .get("/api/TelusurBahanMasuk/get", {
            params: {
              jsonQuery: JSON.stringify({
                idTelusur: id,
                pipeline: [
                  {
                    $project: {
                      "items.jamDituang": 1
                    }
                  }
                ]
              }),
            },
          })
          .then((res) => res?.data?.result);
        const item = result?.[0];
        if (item) {
          const items = item?.items || [];
          this.listJamMulai = items.map((item) => item.jamDituang);
        }
      } catch (err) {
        this.$swal(err?.response?.data || err?.message, "", "error");
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate();
      if (!this.form) return;
      const send = {
        jamMulai: this.jamMulai,
        jamSelesai: this.jamSelesai,
        jumlahPekerja: this.jumlahPekerja,
        cuaca: this.cuaca,
        penggetarTipe: this.penggetarTipe,
        penggetarJumlah: this.penggetarJumlah,
        finishing: this.finishing,
        curingSistem: this.curingSistem,
        curingLama: this.curingLama,
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
        this.items[idx].jamMulai = send.jamMulai;
        this.items[idx].jamSelesai = send.jamSelesai;
        this.items[idx].jumlahPekerja = send.jumlahPekerja;
        this.items[idx].cuaca = send.cuaca;
        this.items[idx].penggetarTipe = send.penggetarTipe;
        this.items[idx].penggetarJumlah = send.penggetarJumlah;
        this.items[idx].finishing = send.finishing;
        this.items[idx].curingSistem = send.curingSistem;
        this.items[idx].curingLama = send.curingLama;
      }
      this.clearInput();
    },
    select(item) {
      this.id = item._id;
      this.jamMulai = item.jamMulai;
      this.jamSelesai = item.jamSelesai;
      this.jumlahPekerja = item.jumlahPekerja;
      this.cuaca = item.cuaca;
      this.penggetarTipe = item.penggetarTipe;
      this.penggetarJumlah = item.penggetarJumlah;
      this.finishing = item.finishing;
      this.curingSistem = item.curingSistem;
      this.curingLama = item.curingLama;
    },
    remove(idx) {
      this.items.splice(idx, 1);
      this.clearInput();
    },
    clearInput() {
      this.id = undefined;
      this.jamMulai = "";
      this.jamSelesai = "";
      this.jumlahPekerja = "";
      this.cuaca = "";
      this.penggetarTipe = "";
      this.penggetarJumlah = "";
      this.finishing = "";
      this.curingSistem = "";
      this.curingLama = "";
      this.$refs.form.resetValidation();
    },
    fetchJamSelesai() {
      this.jamSelesai = this.items?.[this.items.length - 1]?.jamSelesai
    },
    fetchJumlahPekerja() {
      this.jumlahPekerja = this.items?.[this.items.length - 1]?.jumlahPekerja
    },
    fetchCuaca() {
      this.cuaca = this.items?.[this.items.length - 1]?.cuaca
    },
    fetchPenggetarTipe() {
      this.penggetarTipe = this.items?.[this.items.length - 1]?.penggetarTipe
    },
    fetchPenggetarJumlah() {
      this.penggetarJumlah = this.items?.[this.items.length - 1]?.penggetarJumlah
    },
    fetchFinishing() {
      this.finishing = this.items?.[this.items.length - 1]?.finishing
    },
    fetchCuringSistem() {
      this.curingSistem = this.items?.[this.items.length - 1]?.curingSistem
    },
    fetchCuringLama() {
      this.curingLama = this.items?.[this.items.length - 1]?.curingLama
    },
  },
};
</script>
