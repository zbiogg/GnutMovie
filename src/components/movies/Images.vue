<template>
  <div class="container mx-auto border-b border-gray-600 px-4 py-4  ">
      <h2 class="text-4xl font-semibold mb-5">
          Images  
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          <div class="mr-2" v-for="(item,index) in images" :key="index">
              <img :src="imagePath(index)" alt="" class="w-300 mb-2"/>
          </div>
          
         
         
      </div>
  </div>
</template>

<script>
export default {
    props:{
        images:{
            require: true
        }
    },
    methods:{
        imagePath(index){
            return  this.images[index].file_path?"https://image.tmdb.org/t/p/w500"+this.images[index].file_path:'https://via.placeholder.com/300x450';
        }
    }
}
</script>

<style>

</style>