import Vue from 'vue';
import VueCookies from 'vue-cookies';
import VueJwtDecode from 'vue-jwt-decode';
// cookies
Vue.use(VueCookies);
Vue.$cookies.config('7d');
// jwt
Vue.use(VueJwtDecode);
