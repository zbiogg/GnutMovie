<template>
  <div class="mx-5">
    <h2 class="mt-5 text-yellow-500 uppercase text-lg font-semibold">
      Popular Movies
    </h2>
    <div class="grid grid-cols-1 sm-grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <MovieItem v-for="(item,index) in movie" :key ="index" :movie="item" :genres="genres"/>
    </div>
    
  </div>
</template>

<script>
import MovieItem from './items/MovieItem.vue'
export default {
  components:{
    MovieItem
  },
  data(){
    return{
      movie:[],
      genres:[]
    }
  },
 async  mounted(){
    this.getListGenre();
    const res = await this.$http.get('/movie/popular');
    this.movie= res.data.results
    console.log(this.movie[0]);
  },
  methods:{
    async getListGenre(){
      const res = await this.$http.get('/genre/movie/list');
      console.log(res.data.genres);
      this.genres = res.data.genres;
    },
  }
}
</script>

<style>

</style>