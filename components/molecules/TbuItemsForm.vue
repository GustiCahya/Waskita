<template>
  <v-card class="mt-3" color="$isDark ? 'grey darken-4' : ''">
    <v-card-title class="my-2 mb-3"> Kelola Detail </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-select
              v-model="noKendaraan"
              :items="listNoKendaraan"
              :menu-props="{ offsetY: true }"
              label="Pilih no.Kendaraan"
              placeholder="Pilih no.Kendaraan"
              dense
              outlined
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="kodeSilinder"
              label="Kode Silinder"
              :rules="rules.kodeSilinder"
              outlined
              dense
              @dblclick="fetchKodeSilinder"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="jamPembuatan"
              label="Jam Pembuatan"
              :rules="rules.jamPembuatan"
              outlined
              dense
              @dblclick="fetchJamPembuatan"
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0"></v-col>
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
              <th class="text-left">No. Kendaraan</th>
              <th class="text-left">Kode Silinder</th>
              <th class="text-left">Jam Pembuatan</th>
              <th class="text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in items" :key="item._id">
              <td>{{ item.noKendaraan }}</td>
              <td>{{ item.kodeSilinder }}</td>
              <td>{{ item.jamPembuatan }}</td>
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
      noKendaraan: "",
      jamPembuatan: "",
      kodeSilinder: "",
      rules: {
        noKendaraan: [],
        jamPembuatan: [
          (v) => {
            if (v === "" || v === null) {
              return true;
            }
            return (
              /^\d\d:\d\d$/gi.test(v) || "Harus berupa jam (contoh: 11:31)"
            );
          },
        ],
        kodeSilinder: [(v) => !!v || "Harap diisi"],
      },
      id: undefined,
      form: false,
      // additional info
      listNoKendaraan: [],
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
                      "items.noKendaraan": 1
                    }
                  }
                ]
              }),
            },
          })
          .then((res) => res?.data?.result);
        const tbm = result?.[0];
        if (tbm) {
          this.listNoKendaraan = tbm?.items?.map((item) => item.noKendaraan) || [];
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
        noKendaraan: this.noKendaraan,
        jamPembuatan: this.jamPembuatan,
        kodeSilinder: this.kodeSilinder,
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
        this.items[idx].noKendaraan = send.noKendaraan;
        this.items[idx].jamPembuatan = send.jamPembuatan;
        this.items[idx].kodeSilinder = send.kodeSilinder;
      }
      this.clearInput();
    },
    select(item) {
      this.id = item._id;
      this.noKendaraan = item.noKendaraan;
      this.jamPembuatan = item.jamPembuatan;
      this.kodeSilinder = item.kodeSilinder;
    },
    remove(idx) {
      this.items.splice(idx, 1);
      this.clearInput();
    },
    clearInput() {
      this.id = undefined;
      this.noKendaraan = "";
      this.jamPembuatan = "";
      this.kodeSilinder = "";
      this.$refs.form.resetValidation();
    },
    fetchJamPembuatan() {
      this.jamPembuatan = this.items?.[this.items.length - 1]?.jamPembuatan
    },
    fetchKodeSilinder() {
      this.kodeSilinder = this.items?.[this.items.length - 1]?.kodeSilinder
    },
  },
};
</script>
