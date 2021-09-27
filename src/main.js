import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueCropper from 'vue-cropperjs';
import VueCookie from 'vue-cookie';
import 'cropperjs/dist/cropper.css';
Vue.component(VueCropper);

Vue.config.productionTip = false;
Vue.use(VueCookie);
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app');
