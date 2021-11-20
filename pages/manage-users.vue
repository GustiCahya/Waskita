<template>
  <div>
    <v-container id="regular-tables-view" fluid tag="section">
      <view-intro
        heading="Manage Roles"
        desc="Pilih user yang akan anda edit role-nya"
      />
      <v-card>
        <v-card-title>
          <h3>Kelola Akun</h3>
        </v-card-title>
        <div class="d-flex justify-space-between">
          <tambah-user @refreshUsers="getUsers" />
          <v-form @submit.prevent="searchUser">
            <v-text-field
              v-model="search.email"
              placeholder="Cari Email"
              class="ml-auto mr-5 mt-n4 mb-2"
              color="secondary"
              hide-details
              style="max-width: 250px"
            >
              <template v-slot:append-outer>
                <v-btn
                  type="submit"
                  class="mt-n2"
                  fab
                  small
                  elevation="2"
                  height="44"
                  width="44"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </div>
        <v-simple-table>
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Nama Panjang</th>
              <th>Roles</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody v-for="(item, i) in users" :key="item._id">
            <tr>
              <td>{{ (page - 1) * limit + (i + 1) }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.fullName }}</td>
              <td>
                <v-chip-group>
                  <v-chip v-for="role in item.roles" :key="role">
                    {{ role }}
                  </v-chip>
                </v-chip-group>
              </td>
              <td>
                <v-btn
                  color="orange darken-2"
                  :icon="true"
                  @click.native="selectUser(item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  color="red"
                  :icon="true"
                  :loading="loadingRemove === item._id"
                  @click.native="removeUser(item)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <div v-if="isLoading" class="d-flex justify-center">
          <v-progress-circular
            class="my-4"
            indeterminate
            color="primary"
            size="30"
          />
        </div>
        <div class="text-center pt-3 pb-1">
          <v-pagination
            v-model="page"
            :length="pagesLength"
            :total-visible="7"
          />
        </div>
      </v-card>

      <div class="py-3" />
    </v-container>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 teal white--text">
          Edit Role
        </v-card-title>

        <v-card-text class="pt-6 pb-2">
          <v-form>
            <v-row align="center" justify="center">
              <v-col cols="12" md="5" class="px-2 py-0">
                <v-text-field
                  class="text-caption"
                  disabled
                  label="Email"
                  :value="selectedUser.email"
                  dense
                  outlined
                />
              </v-col>
              <v-col cols="12" md="7" class="px-2 py-0">
                <v-select
                  v-model="selectedUser.roles"
                  class="text-caption"
                  :items="listRoles"
                  :menu-props="{ offsetY: true }"
                  label="Roles"
                  dense
                  outlined
                  multiple
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            :loading="isLoadingSubmit"
            @click="submitRole"
          >
            Simpan
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import TambahUser from "../components/organisms/TambahUser.vue";
export default {
  components: {
    TambahUser,
  },
  layout: "dashboard",
  data() {
    return {
      // Table
      users: [],
      isLoading: true,
      page: 1,
      limit: 10,
      pagesLength: 1,
      search: {
        email: "",
      },
      // Item
      dialog: false,
      listRoles: require("@/static/constants/roles.json"),
      selectedUser: {
        _id: "",
        email: "",
        roles: [],
      },
      loadingRemove: false,
      isLoadingSubmit: false,
    };
  },
  watch: {
    async page() {
      await this.getUsers();
    },
  },
  async beforeMount() {
    const roles = await this.$getUserRoles();
    if (!roles?.includes("Super Admin")) {
      this.$router.replace("/telusur");
    }
  },
  async mounted() {
    await this.getUsers();
  },
  methods: {
    async getUsers() {
      this.isLoading = true;
      try {
        this.users = [];
        const response = await this.$axios.get(`api/Users/getUsers`, {
          params: {
            page: this.page,
            limit: this.limit,
          },
        });
        const result = response.data.result;
        this.pagesLength = response.data.pagesLength;
        this.users = result;
      } catch (err) {
        this.$swal(err?.response?.data?.message || err?.message);
      }
      this.isLoading = false;
    },
    async searchUser() {
      this.isLoading = true;
      try {
        this.users = [];
        const response = await this.$axios.get(`api/Users/getUsers`, {
          params: {
            jsonQuery: JSON.stringify({
              email: { $regex: this.search.email },
            }),
            page: this.page,
            limit: this.limit,
          },
        });
        const result = response.data.result;
        this.pagesLength = response.data.pagesLength;
        this.users = result;
      } catch (err) {
        this.$swal(err?.response?.data?.message || err?.message);
      }
      this.isLoading = false;
    },
    selectUser(item) {
      this.dialog = true;
      this.selectedUser = Object.assign({}, item);
    },
    async submitRole() {
      this.isLoadingSubmit = true;
      try {
        const body = this.selectedUser;
        const response = await this.$axios.put(`api/Users/setRoles`, body);
        if (response?.data?.success) {
          this.users = this.users.map((user) =>
            user?._id === body?._id ? { ...user, roles: body?.roles } : user
          );
          this.dialog = false;
        } else {
          this.$swal("Gagal Edit, Coba Lagi", "", "error");
        }
      } catch (err) {
        this.$swal(err?.response?.data?.message || err?.message, "", "error");
      }
      this.isLoadingSubmit = false;
    },
    async removeUser(item) {
      const resultSwal = await this.$swal({
        title: "Yakin ingin dihapus?",
        text: "Anda tidak akan bisa mengembalikan ini!",
        icon: "warning",
        showCancelButton: true,
        focusCancel: true,
        cancelButtonColor: "grey",
        confirmButtonColor: "#ED2939",
        confirmButtonText: "Iya, hapus saja!",
      });
      console.log(item._id);
      if (!resultSwal.value) return;
      try {
        const query = { _id: item._id };
        const response = await this.$axios.delete(`api/Users/remove`, {
          params: query
        });
        if (response?.data?.success) {
          await this.getUsers();
        } else {
          this.$swal("Gagal Hapus, Coba Lagi", "", "error");
        }
      } catch (err) {
        this.$swal(err?.response?.data?.message || err?.message, "", "error");
      }
      this.loadingRemove = false;
    },
  },
};
</script>
