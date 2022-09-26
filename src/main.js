import { createApp } from "vue";
import QrcodeVue from "qrcode.vue";

import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

app.component("qr-code", QrcodeVue);
app.mount("#app");
