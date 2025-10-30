import { createMemoryHistory, createRouter } from "vue-router";

import Login from "@/views/Login.vue";
import TalkView from "@/views/TalkView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  {
    path: "/",
    component: TalkView,
  },
  { path: "/login", component: Login },
  { path: "/register", component: RegisterView },
];
const router = createRouter({ history: createMemoryHistory(), routes });

export default router;
