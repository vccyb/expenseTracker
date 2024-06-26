import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 999,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
