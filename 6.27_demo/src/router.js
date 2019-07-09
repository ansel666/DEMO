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
      path: '/detail/:id',
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
      path: '/vant',
      name: 'vant',
      component: () => import('./views/Vant.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo.vue')
    },
    {
      path: '/list1',
      name: 'list1',
      component: () => import('./views/List1.vue')
    },
    {
      path:"/*",
      redirect:"/"
    }
  ]
})
