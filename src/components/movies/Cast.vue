<template>
  <div class="container mx-auto border-b border-gray-600 px-4 py-4 ">
      <h2 class="text-4xl font-semibold mb-5">
          Cast  
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="mr-2" v-for="(item,index) in cast" :key="index">
              <img  :src="profilePath(index)" alt="" class="w-300 h-5/6 mx-auto"/>
              <p class="text-gray-300 text-center mt-1">{{item.name}}</p>
          </div>
  
      </div>
  </div>
</template>

<script>
export default {
    props:{
        cast:{
            require: true
        }
    },
    methods:{
        profilePath(index){
            return this.cast[index].profile_path?"https://image.tmdb.org/t/p/w500"+this.cast[index].profile_path:'https://via.placeholder.com/300x450';
        }
    }
}
</script>

<style>

</style>