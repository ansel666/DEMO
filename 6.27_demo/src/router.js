import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/Car.vue')
    },
    {
      path:"/*",
      redirect:"/"
    }
  ]
})
