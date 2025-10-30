import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
  const isExpanded = ref(false);

  function toggleSidebar() {
    isExpanded.value = !isExpanded.value;
  }
  function expandSidebar() {
    isExpanded.value = true;
  }
  function collapeSidebar() {
    isExpanded.value = false;
  }

  return { isExpanded, toggleSidebar, expandSidebar, collapeSidebar };
});
