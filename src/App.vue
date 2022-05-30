<template>
  <div id="app">
    <div class="justify-between flex border-b border-gray-500 items-center p-3">
      <NavBar />
      <SearchBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import "./assets/css/style.css";
import NavBar from "./components/header/NavBar.vue";
import SearchBar from "./components/header/SearchBar.vue";
export default {
  name: "App",
  components:{
    NavBar,
    SearchBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
