<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list-item v-if="!miniVariant">
        <v-list-item-content class="text-center">
          <v-list-item-title class="text-h6">
            <img
              :src="require('@/static/icon.png')"
              class="white rounded-lg"
              height="100"
              alt="waskita icon"
            />
          </v-list-item-title>
          <v-list-item-subtitle style="word-wrap: break-word;">
            <p class="text-body-1 white--text pa-0 ma-0">{{ fullName }}</p>
            <p class="text-caption pa-0 ma-0">{{ email }}</p>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <div v-for="(item, i) in items" :key="i">
          <v-list-item
            v-if="item.show()"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn icon title="Logout" @click="logout">
        <v-icon>mdi-door-open</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container style="min-height: 100vh">
        <Nuxt />
      </v-container>
      <v-footer>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "mdi-truck",
          title: "Telusur",
          to: "/telusur",
          show: () => {
            return true;
          }
        },
        {
          icon: "mdi-chart-bubble",
          title: "Review Telusur",
          to: "/review",
          show: () => {
            return true;
          }
        },
        {
          icon: "mdi-account-multiple",
          title: "Kelola Akun",
          to: "/manage-users",
          show: () => {
            return this.roles?.includes("Super Admin");
          }
        },
      ],
      miniVariant: false,
      title: "Waskita",
      // user profile
      email: "",
      fullName: "",
      roles: []
    };
  },
  async beforeMount() {
    const isLogin = await this.$isLogin();
    if(!isLogin){
      this.$logout();
    }
  },
  async mounted() {
    const user = this.$getUserData();
    this.email = user?.email;
    this.fullName = user?.fullName;
    const roles = await this.$getUserRoles();
    this.roles = roles;
  },
  methods: {
    logout() {
      this.$logout();
    }
  }
};
</script>
