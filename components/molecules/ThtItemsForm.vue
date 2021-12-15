<template>
  <v-card class="mt-3" color="grey darken-4">
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
export default {
  components: {},
  props: {
    idTelusur: String,
    items: Array,
  },
  data() {
    return {
      kodeSilinder: "",
      hasilDensity: null,
      hasilTekan: null,
      rules: {
        kodeSilinder: [(v) => !!v || "Harap diisi"],
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
  watch: {},
  async mounted() {
    // fetch telusur data
    const id = this.$route.query.id || this.idTelusur;
    if (id) {
      try {
        // telusur benda uji
        const result = await this.$axios
          .get("/api/TelusurBendaUji/get", {
            params: {
              jsonQuery: JSON.stringify({
                idTelusur: id,
              }),
            },
          })
          .then((res) => res?.data?.result);
        const item = result?.[0];
        if (item) {
          const items = item?.items || [];
          this.listKodeSilinder = items.map((item) => item.kodeSilinder);
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
        kodeSilinder: this.kodeSilinder,
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
        this.items[idx].hasilDensity = send.hasilDensity;
        this.items[idx].hasilTekan = send.hasilTekan;
      }
      this.clearInput();
    },
    select(item) {
      this.id = item._id;
      this.kodeSilinder = item.kodeSilinder;
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
      this.hasilDensity = null;
      this.hasilTekan = null;
      this.$refs.form.resetValidation();
    },
    fetchHasilDensity() {
      this.hasilDensity = this.items?.[this.items.length - 1]?.hasilDensity
    },
    fetchHasilTekan() {
      this.hasilTekan = this.items?.[this.items.length - 1]?.hasilTekan
    },
  },
};
</script>
