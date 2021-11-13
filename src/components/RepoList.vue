<template>
  <div class="max-w-7xl flex flex-wrap gap-7 justify-center mx-auto my-7 px-4">
    <div
      class="
        sm:w-96
        w-full
        bg-purple-300
        p-4
        rounded-lg
        flex flex-col
        gap-2
        hover:shadow-lg
        transition
        duration-150
        ease-in-out
        dark:bg-purple-700
      "
      v-for="repo in getRepositories"
      :key="repo.id"
    >
      <p class="text-center truncate">
        <a
          :href="repo.html_url"
          class="
            text-2xl
            font-medium
            hover:text-indigo-700
            transition
            duration-150
            ease-in-out
          "
          target="_blank"
          >{{ repo.name }}</a
        >
      </p>
      <a
        :href="repo.owner.url"
        class="
          text-xl
          font-semibold
          hover:text-indigo-700
          transition
          duration-150
          ease-in-out
          truncate
        "
        target="_blank"
        >Author: {{ repo.owner.login }}</a
      >
      <p class="truncate transition duration-150 ease-in-out">
        <span class="font-semibold">Description: </span>{{ repo.description }}
      </p>
      <p class="transition duration-150 ease-in-out">
        <span class="font-semibold">Language: </span> {{ repo.language }}
      </p>
      <p class="text-2xl font-semibold text-yellow-200 text-right">
        <span>{{ repo.stargazers_count }} &#9733;</span>
      </p>
    </div>
  </div>
  <Pagination />
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "./Pagination";

export default {
  name: "RepoList",
  components: {
    Pagination,
  },
  computed: {
    ...mapGetters(["getRepositories"]),
  },
};
</script>
