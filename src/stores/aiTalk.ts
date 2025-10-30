import { defineStore } from "pinia";
import { ref } from "vue";

export const useAITalk = defineStore("userTalk", () => {
  const text = ref("");

  return { text };
});
