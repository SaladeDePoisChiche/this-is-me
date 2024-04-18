import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { aliases, fa } from 'vuetify/iconsets/fa'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import "vuetify/styles";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas)
library.add(far)
const vuetify = createVuetify({
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
          fa,
        },
      },
});

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
