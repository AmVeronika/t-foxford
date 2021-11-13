<template>
  <section class="flex-grow dark:bg-black transition duration-150 ease-in-out">
    <div class="container mx-auto sm:py-10 py-5">
      <h1 class="sm:text-4xl text-3xl font-semibold text-center">
        Repositories
      </h1>
      <RepoList v-if="getRepositories && getSearchQuery" />
      <Information v-else />
    </div>
  </section>
</template>

<script>
import RepoList from "./RepoList";
import Information from "./Information";
import { mapGetters } from "vuex";

export default {
  name: "Main",
  components: {
    RepoList,
    Information,
  },
  computed: {
    ...mapGetters(["getRepositories", "getSearchQuery"]),
  },
};
</script>

<style scoped></style>
