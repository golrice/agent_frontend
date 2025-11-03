import { AIType } from "@/types/ai";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAITalk = defineStore("userTalk", () => {
  const text = ref("");

  return { text };
});

export const useAIType = defineStore("aiType", () => {
  const type = ref<AIType>(AIType.Base);

  return { type };
});
