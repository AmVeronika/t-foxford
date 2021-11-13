<template>
  <div
    class="flex mx-auto mt-1 justify-center gap-7 text-3xl font-extrabold"
    v-show="getTotalCount > 12 * getPage"
    @click="moreData"
  >
    <button class="flex flex-col items-center hover:text-blue-900 px-6">
      more
      <span class="-m-3">&#129087;</span>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Pagination",
  methods: {
    ...mapMutations(["setPage"]),
    ...mapActions(["fetchData"]),
    moreData() {
      this.setPage(++this.getPage);
      this.fetchData(this.getSearchQuery);
    },
  },
  computed: {
    ...mapGetters(["getTotalCount", "getSearchQuery", "getPage"]),
  },
};
</script>
