<template>
  <div>
    <v-card-title class="headline"> Telusur Bahan Masuk </v-card-title>
    <v-form @submit.prevent="generate">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="id"
              label="No. Formulir"
              placeholder="No. Formulir"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="noIzin"
              label="No. Izin"
              placeholder="No. Izin"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <app-date-picker
              v-model="tanggalMasuk"
              label="Tanggal Masuk"
              placeholder="Tanggal Masuk"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <app-bulk-input
              v-model="pemasok"
              label="Pemasok"
              placeholder="Pemasok"
              outlined
              dense
            >
              <pemasok-form :items="pemasok" />
            </app-bulk-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <v-text-field
              v-model="lokasiPengecoran"
              label="Lokasi Pengecoran"
              placeholder="Lokasi Pengecoran"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <app-bulk-input
              v-model="mutuBeton"
              label="Mutu Beton"
              placeholder="Mutu Beton"
              outlined
              dense
            >
              <mutu-beton-form :items="mutuBeton" />
            </app-bulk-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="py-0">
            <app-bulk-input
              v-model="personil"
              label="Personil"
              placeholder="Personil"
              outlined
              dense
            >
              <personil-form :items="personil" />
            </app-bulk-input>
          </v-col>
          <v-col cols="12" md="6" class="py-0"> </v-col>
        </v-row>
        <v-card>
          <v-card-title> Kelola Detail </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="form" @submit.prevent="submit">
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
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" nuxt :loading="loadingGenerate">
          Generate
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>
<script>
import AppBulkInput from "../atoms/AppBulkInput.vue";
import AppDatePicker from "../atoms/AppDatePicker.vue";
import MutuBetonForm from "../molecules/MutuBetonForm.vue";
import PemasokForm from "../molecules/PemasokForm.vue";
import PersonilForm from "../molecules/PersonilForm.vue";
export default {
  components: {
    AppDatePicker,
    AppBulkInput,
    PemasokForm,
    MutuBetonForm,
    PersonilForm,
  },
  props: {
    idTelusur: String,
  },
  data() {
    return {
      // form
      id: "",
      noIzin: "",
      tanggalMasuk: null,
      pemasok: [],
      lokasiPengecoran: "",
      mutuBeton: [],
      personil: [],
      // items
      items: [],
      // others
      loadingGenerate: false,
    };
  },
  computed: {
    display() {
      return `${this.items.length} ${this.label}`;
    },
  },
  methods: {
    async generate() {
      this.loadingGenerate = true;
      try {
        const sendData = {};
        const result = await this.$axios
          .post("/api/TelusurBahanMasuk/create", sendData)
          .then((res) => res?.data?.result);
        alert(result);
      } catch (err) {
        alert(err?.response?.data?.message || err?.message);
      }
      this.loadingGenerate = false;
    },
  },
};
</script>
