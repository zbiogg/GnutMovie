<template>
  <div v-if="movie">
    <router-link :to="'/movie/'+movie.id">
      <img :src="posterPath" alt="">
      <h1 class="ml-1 mt-1">{{movie.title}}</h1>
      <div class="flex items-center">
        <AwesomeVueStarRating 
        :star="1"
        :disabled="false" 
        :maxstars="1" 
        starsize="xs" 
        :hasresults="false" 
        :hasdescription="false"/>
        <span class="ml-2">{{movie.vote_average*10}}% | {{movie.release_date}}

        </span>
      </div>
      <div>
        <span class="text-sm text-gray-500 ml-1">{{nameOfGenre}}</span>
      </div>
    </router-link>
      
  </div>
</template>

<script>
import AwesomeVueStarRating from 'awesome-vue-star-rating'
export default {
  components: {
    AwesomeVueStarRating
  },
  props:{
    movie:{
      require: true,
      type: Object
    },
    genres:{
      requre: true
    }
  },
  computed:{
    posterPath(){
      return "https://image.tmdb.org/t/p/w500"+this.movie.poster_path;
    },
    nameOfGenre(){
      let genresString = "";
      this.movie.genre_ids.map(id => {
        genresString+=this.genres.filter(item=>item.id==id)[0].name+", ";
      });
      return genresString.substring(0,genresString.length-2);
  
    }
  },

 
}
</script>

<style>

</style>