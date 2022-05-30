<template>
  <div class="container  mx-auto">
      
      <div>
          <PopularMovies/>
      </div>
      
  </div>
</template>

<script>
import NavBar from './header/NavBar.vue'
import SearchBar from './header/SearchBar.vue'
import PopularMovies from './PopularMovies.vue'
export default {
    components:{
        NavBar,
        SearchBar,
        PopularMovies
    }
}
</script>

<style>
@tailwind base;
</style>