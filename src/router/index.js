import { createRouter, createWebHistory } from 'vue-router'
import PokemonsView from '../views/PokemonsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'pokemons',
      component: PokemonsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/:name',
      name: 'pokemon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PokemonView.vue')
    }
    ,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
