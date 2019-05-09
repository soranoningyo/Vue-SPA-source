import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import News from './views/News.vue'
import Sports from './views/Sports.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Sports',
      name: 'Sports',
      component: Sports
    }

  ]
})
