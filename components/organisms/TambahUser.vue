<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" class="mx-4" dark v-bind="attrs" v-on="on">
          Tambah User
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 blue white--text mb-3">
          Tambah User
        </v-card-title>
        <v-form ref="addUserForm" v-model="addUserForm" @submit.prevent="addUser">
        <v-card-text>
            <v-row align="center" justify="center">
              <v-col cols="12" class="px-2 py-0">
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="rules.email"
                  dense
                  outlined
                />
              </v-col>
              <v-col cols="12" class="px-2 py-0">
                <v-text-field
                  v-model="fullName"
                  label="Nama Panjang"
                  :rules="rules.fullName"
                  dense
                  outlined
                />
              </v-col>
              <v-col cols="12" class="px-2 py-0">
                <v-text-field
                  v-model="password"
                  label="Password"
                  :rules="rules.password"
                  type="password"
                  dense
                  outlined
                />
              </v-col>
              <v-col cols="12" class="px-2 py-0">
                <v-select
                  v-model="roles"
                  :items="listRoles"
                  :rules="rules.listRoles"
                  :menu-props="{ offsetY: true }"
                  label="Roles"
                  dense
                  outlined
                  multiple
                />
              </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit" color="primary" :loading="addUserLoading" text> Simpan </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "TambahUser",
  data() {
    return {
      // user
      email: "",
      fullName: "",
      password: "",
      roles: [],
      listRoles: require("@/static/constants/roles.json"),
      rules: {
        email: [
          (v) => !!v || "Harus diisi",
          (v) =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || "Harus email",
        ],
        fullName: [(v) => !!v || "Harus diisi"],
        password: [
          (v) => !!v || "Harus diisi",
          (v) => v?.length >= 8 || "Minimal 8 karakter",
        ],
        roles: [(v) => !!v || "Harus diisi"],
      },
      // etc
      addUserForm: false,
      addUserLoading: false,
      dialog: false,
    };
  },
  watch: {},
  methods: {
    async addUser() {
      this.$refs.addUserForm.validate();
      if(!this.addUserForm) return;
      this.addUserLoading = true;
      try{
        const data = await this.$axios.post("/api/Users/save", {
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          roles: this.roles
        }).then(res => res?.data);
        if(data?.success){
          this.$swal("Akun berhasil didaftarkan", "", "success");
          this.$emit("refreshUsers");
          this.clear();
        }
      }catch(err){
        this.$swal(err?.response?.data?.message || err?.message, "", "warning");
      }
      this.addUserLoading = false;
    },
    clear() {
      this.fullName = "";
      this.email = "";
      this.password = "";
      this.roles = [];
      this.$refs.addUserForm.resetValidation();
    }
  },
};
</script>
