import { createApp } from "vue";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import "tailwindcss";
import "@/assets/main.css";
import router from "@/routers/routes.ts";

import ElementPlus from "element-plus";
import App from "@/App.vue";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(ElementPlus);
app.mount("#app");
