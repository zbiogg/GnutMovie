<template>
  <div class="flex">
      <input
      type="text" 
      class="rounded-full bg-gray-600 px-8 h-10 w-48 mr-3" 
      placeholder="Search...">
      <div class="absolute h-10 items-center flex">
        <icon class="ml-2 mr-3" name="search" :width="'16px'" :height="'16px'" color="#A9A9A9"></icon>
      </div>
      <div v-if="false" class="absolute mt-12 rounded bg-gray-600 w-60">
        <ul class="mt-3">
          <li class="flex items-center border-b border-gray-500 p-1">
            <img src="@/assets/images/movie1.jpg" class="w-10" alt="">
            <span>Die Hard</span>
          </li>
        </ul>
      </div>
      <img src="https://via.placeholder.com/100x100" alt="" class="bg-yellow-900 h-10 w-10 rounded-full">
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>