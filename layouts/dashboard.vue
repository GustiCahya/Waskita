<template>
  <v-app v-if="!loadingMount" dark>
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
          <v-list-item-subtitle
            style="word-wrap: break-word"
            :style="{ color: $isDark ? 'white' : 'black' }"
          >
            <p class="text-body-1 pa-0 ma-0">{{ fullName }}</p>
            <p class="text-caption pa-0 ma-0">{{ email }}</p>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <div v-for="(item, i) in items" :key="i">
          <v-list-item v-if="item.show()" :to="item.to" router exact>
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
    <v-app-bar fixed app class="pr-md-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <div v-for="(item, i) in userNavs" :key="i">
            <v-list-item @click="item.handleClick">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container
        style="min-height: 100vh"
        :class="{
          'darkHero': $isDark === true,
          'lightHero': $isDark === false
        }"
      >
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
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "/home",
          show: () => {
            return true;
          },
        },
        {
          icon: "mdi-truck",
          title: "Telusur",
          to: "/telusur",
          show: () => {
            return true;
          },
        },
        {
          icon: "mdi-chart-bubble",
          title: "Review Telusur",
          to: "/review",
          show: () => {
            return true;
          },
        },
        {
          icon: "mdi-account-multiple",
          title: "Kelola Akun",
          to: "/manage-users",
          show: () => {
            return this.roles?.includes("Super Admin");
          },
        },
      ],
      miniVariant: false,
      title: "Waskita",
      // user profile
      email: "",
      fullName: "",
      roles: [],
      // loading
      loadingMount: true,
    };
  },
  computed: {
    userNavs() {
      return [
        {
          icon: "mdi-key",
          text: "Reset Password",
          handleClick: () => {
            this.$router.push("/user/reset-password");
          },
        },
        {
          icon: this.$isDark ? "mdi-weather-sunny" : "mdi-moon-waning-crescent",
          text: this.$isDark ? "Light Mode" : "Dark Mode",
          handleClick: () => {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem(
              "useDarkTheme",
              this.$vuetify.theme.dark.toString()
            );
          },
        },
        {
          icon: "mdi-door-open",
          text: "logout",
          handleClick: () => {
            this.$logout();
          },
        },
      ];
    }
  },
  async beforeMount() {
    this.loadingMount = true;
    try {
      const isLogin = await this.$isLogin();
      if (!isLogin) {
        this.$logout();
      }
    } catch (err) {
      this.$swal(err?.response?.data?.message || err?.message, "", "warning");
    }
    this.loadingMount = false;
  },
  async mounted() {
    // handle user
    const user = this.$getUserData();
    this.email = user?.email;
    this.fullName = user?.fullName;
    const roles = await this.$getUserRoles();
    this.roles = roles;
    // handle theme
    const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
  methods: {},
};
</script>
