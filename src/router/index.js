import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/movies/Movie'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie
    }
  ]
})
