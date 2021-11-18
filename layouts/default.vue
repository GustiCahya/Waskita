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
            <p class="text-body-1 white--text pa-0 ma-0">Timotius Andoliny</p>
            <p class="text-caption pa-0 ma-0">anthonny@test.com</p>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
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
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Review Telusur",
          to: "/review",
        },
        {
          icon: "mdi-account-multiple",
          title: "Kelola Akun",
          to: "/manage-users",
        },
      ],
      miniVariant: false,
      title: "Waskita",
    };
  },
};
</script>
