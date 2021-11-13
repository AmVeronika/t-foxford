<template>
  <nav class="bg-indigo-700 p-4 sticky top-0 dark:bg-indigo-900">
    <div class="container mx-auto flex items-center justify-between gap-3.5">
      <a
        class="
          sm:text-4xl
          text-2xl
          font-semibold
          transition
          duration-150
          ease-in-out
        "
        href="/"
        >Foxford</a
      >
      <form class="ml-auto">
        <input
          v-model="searchData"
          @input="handleInput"
          class="
            text-xl
            py-2
            px-4
            rounded-lg
            sm:w-96
            w-full
            focus:outline-none
            focus:ring
            focus:ring-yellow-500
            focus:border-transparent
            text-black
          "
          type="search"
          placeholder="Search repositories"
        />
      </form>
      <button @click="toggleTheme" class="flex-shrink-0 sm:block hidden">
        <img
          :class="[
            'transform',
            'transition',
            'duration-300',
            'ease-in-out',
            { 'rotate-180': darkTheme },
          ]"
          src="../assets/img/theme.png"
          alt="theme"
        />
      </button>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      searchData: "",
      darkTheme: false,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["setRepositories", "setSearchQuery", "setPage"]),
    handleInput() {
      this.setPage(1);
      this.setSearchQuery(this.searchData);
      this.fetchData(this.searchData);
    },
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
      if (this.darkTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
  computed: {
    ...mapGetters(["getRepositories"]),
  },
};
</script>
