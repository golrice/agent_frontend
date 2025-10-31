import { defineStore } from "pinia";
import { computed, ref, watch, type Ref } from "vue";

export type User = {
  id: string;
  email: string;
  username: string;
  is_active: boolean;
  is_superuser: boolean;
};

function createDefaultUser(): User {
  return {
    id: "",
    email: "",
    username: "",
    is_active: false,
    is_superuser: false,
  };
}

export const useUserTalk = defineStore("userTalk", () => {
  const text = ref("");

  return { text };
});

export const useUserStore = defineStore("user", () => {
  const user = ref<User>(createDefaultUser());

  const isLoginIn = computed(() => user.value.id !== "");

  function setUser(payload: User) {
    user.value = payload;
  }

  function logout() {
    user.value.id = "";
  }

  return { user, isLoginIn, setUser, logout };
});
