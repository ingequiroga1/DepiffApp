import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import segurosRouter from '../modules/seguros/routes'
import RematesView from '../modules/remates/views/homeView.vue'
import ServiciosView from '../modules/servicios/views/serviciosView.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'construction',
  //   component: ConstructionView
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/seguros',
    name: 'seguros',
    ...segurosRouter
  },
  {
    path: '/remates',
    name: 'remates',
    component: RematesView
  },
   {
    path: '/servicios',
    name: 'servicios',
    component: ServiciosView
  }

  
]

const router = new VueRouter({
  routes
})

export default router
