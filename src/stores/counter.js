import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    errortext:false,
    send:false,
  }),
  actions: {

  },
});
