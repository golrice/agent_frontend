import { createMemoryHistory, createRouter } from "vue-router";

import Login from "@/views/Login.vue";
import TalkView from "@/views/TalkView.vue";
import RegisterView from "@/views/RegisterView.vue";
import UserProfile from "@/views/UserProfile.vue";

const routes = [
  {
    path: "/:session_id?",
    component: TalkView,
    props: true,
  },
  { path: "/login", component: Login },
  { path: "/register", component: RegisterView },
  { path: "/profile", component: UserProfile },
];
const router = createRouter({ history: createMemoryHistory(), routes });

export default router;
