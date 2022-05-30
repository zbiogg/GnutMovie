<template>
  <div class="flex">
      <img class="logo-header" src="@/assets/logo.png" alt="logo  ">
      <ul class="flex items-center">
        <li>
          <router-link to="/moives" class="ml-5">
            Movies
          </router-link>
          <router-link to="/actors" class="ml-5">
            Actors
          </router-link>
          <router-link to="/profile" class="ml-5">
            Profile
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .logo-header{
    width: 40px;
    height: 40px;
  }
</style>