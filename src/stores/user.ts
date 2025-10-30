import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserTalk = defineStore("userTalk", () => {
  const text = ref("");

  return { text };
});

export const useUserStore = defineStore("user", () => {
  const user = ref(null);

  function setUser(payload: any) {
    user.value = payload;
  }

  function logout() {
    user.value = null;
  }

  return { user, setUser, logout };
});
