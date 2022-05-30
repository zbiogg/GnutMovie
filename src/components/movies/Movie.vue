<template>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
      <img v-if="movie.poster_path" :src="posterPath" class="w-64" alt="" />
      <div class="ml-24">
        <h1 class="text-4xl font-semibold">{{ movie.title }}</h1>
        <span class="flex mt-1 items-center">
          <AwesomeVueStarRating
          :star="1"
          :disabled="false"
          :maxstars="1"
          starsize="xs"
          :hasresults="false"
          :hasdescription="false"
        />
        <span class="text-gray-500 ml-1"
          >{{ movie.vote_average * 10 }}% | {{ movie.release_date }}
          <span>
            <span v-for="(item, index) in movie.genres" :key="item.id">
              {{ item.name }}
              <span v-if="movie.genres.length - 1 != index">,</span>
            </span>
          </span>
        </span>
        </span>
        
        <p class="mt-5">
          {{ movie.overview }}
        </p>
        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>
          <div class="flex">
            <div  v-for="(crew,index) in movie.credits.crew" :key="index">
              <div v-if="index<2" class="flex flex-col mt-5 mr-5">
              <span >{{crew.name}}</span>
              <span class="text-gray-500">{{crew.job}}</span>
            </div>
            </div>
            
            <!-- <div class="flex flex-col mt-5">
              <span>Bruce Breman</span>
              <span class="text-gray-500"> Executive Producer</span>
            </div> -->
          </div>
        </div>
        <div class="mt-5 flex">
          <a
            :href="youtubeVideo()"
            target="blank"
            class="
              rounded
              bg-yellow-500
              px-5
              py-4
              inline-flex
              text-black
              flex
              items-center
            "
          >
            <icon
              name="play"
              :width="'20px'"
              :height="'20px'"
              color="black"
            ></icon>
            <span class="ml-2">Play Trailer </span>
          </a>
          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-4 inline-flex text-black ml-5"
            @click="isFavorite = !isFavorite"
          >
            <icon
              :name="isFavorite ? 'heart-fill' : 'heart'"
              :width="'20px'"
              :height="'20px'"
              :color="isFavorite ? 'red' : 'black'"
            ></icon>
            <span class="ml-2">{{
              isFavorite ? "Unfavorite" : "Favorite"
            }}</span>
          </a>
        </div>
      </div>
    </div>
    <Cast v-if="movie.credits" :cast="movie.credits.cast" />
    <Images  v-if="movie.images" :images="movie.images.backdrops" />
  </div>
</template>

<script>
import AwesomeVueStarRating from "awesome-vue-star-rating";
import Cast from "./Cast.vue";
import Images from "./Images.vue";
export default {
  components: {
    AwesomeVueStarRating,
    Cast,
    Images,
  },

  async mounted() {
    const res = await this.$http.get("movie/" + this.$route.params.id+"?append_to_response=credits,videos,images");
    this.movie = res.data;
  },
  data() {
    return {
      isFavorite: false,
      movie: [],
    };
  },
  methods:{
    youtubeVideo(){
      return "https://youtube.com/embed/"+this.movie.videos.results[0].key;
    }
  },
  computed:{
  posterPath(){
        return "https://image.tmdb.org/t/p/w500"+this.movie.poster_path;
      },
    }

};
</script>

<style>
</style>