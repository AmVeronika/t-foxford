<template>
  <div
    class="
      flex flex-col
      justify-between
      min-h-screen
      font-mono
      min-w-0
      dark:text-blue-100
      transition
      duration-150
      ease-in-out
    "
  >
    <NavBar />
    <Main />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
    Main,
  },
};
</script>
