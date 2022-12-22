import { createRouter, createWebHistory } from 'vue-router'
import covid from '../views/covid.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import About from '../views/About Corona.vue'
import Symptoms from '../views/Symptoms.vue'
import Prevention from '../views/Prevention.vue'
import Treatment from '../views/Treatment.vue'
import FAQ from '../views/FAQ.vue'
  


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"covid",
      component:covid
    },
    {
      path:'/Home',
      name:'home',
      component: Home
    },
    {
      path:'/news',
      name:'news',
      component: News
    },
    {
      path:'/about Corona',
      name:'about ',
      component : About 
    },
    {
      path:'/Symptoms',
      name:'Symptoms',
      component:Symptoms
    },
    {
      path:'/Prevention',
      name:'Prevention',
      component:Prevention
    },
    {
      path:'/Treatment',
      name:'Treatment',
      component:Treatment
    },
    {
      path:'/FAQ',
      name:'FAQ',
      component:FAQ
    },
    
 

  ]
})

export default router
