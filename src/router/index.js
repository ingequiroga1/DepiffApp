import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConstructionView from '../views/ConstructionView.vue'
import segurosRouter from '../modules/seguros/routes'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'construction',
    component: ConstructionView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/seguros',
    name: 'seguros',
    ...segurosRouter
  }
]

const router = new VueRouter({
  routes
})

export default router
