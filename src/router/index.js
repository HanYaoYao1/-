import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import hospital from '../ele-ui/recipel.vue'
import person from '../ele-ui/hospital/person.vue'
import doctor from '../ele-ui/hospital/doctor.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path:'/',
    redirect:'/hospital/person',

  },
  {
    path: '/hospital',
    name: 'hospital',
    component:hospital,
    children:[
      
      {
        path: 'person',
      
        component:person,
      },
      { 
        path: 'doctor',
        
        component:doctor,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
