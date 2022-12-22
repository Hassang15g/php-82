<template>
    <Home/>
    <About />
  <Symptoms/>
  <Prevention/>
  <Treatment/>
  <FAQ/>
  <News/>

  <div class="ff">
 <VueScrollUp
    tag="div"
    :scroll-duration="1000"
    :scroll-y="250"
    custom-class="my-scroll-up scroll-animation"
  />



  </div>


  <!-- <VueScrollUp
    v-slot="{ isTop }"
    tag="div"
    :scroll-duration="1000"
    :scroll-y="250"
    :always-show="true"
    custom-class="my-scroll-up demo-is-top "
  >
    {{ isTop ? '👇' : '👆' }}
  </VueScrollUp>  -->


</template>



<script>
import Home from "../views/Home.vue"
import About from "../views/About Corona.vue";
import Symptoms from "../views/Symptoms.vue";
import Prevention from "../views/Prevention.vue";
import Treatment from "../views/Treatment.vue";
import FAQ from '../views/FAQ.vue';
import News from '../views/News.vue'

import Footer from "../components/Footer.vue"

// import VueScrollUp from 'vue-scroll-up'

export default {
  components: {
    Home,
    About,
    Symptoms,
    Prevention,
    Treatment,
    FAQ,
    News,


  // VueScrollUp,
    
  


   
  
  }, 
  
};
</script>


<style lang="css">

.my-scroll-up {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
    left: 93vw;
    top: 90vh;
  z-index: 99;
  height: 55px;
  width: 55px;
  background-color: rgba(0, 0, 0, 0.658);
  border: rgba(0, 0, 0, 0.658);
  border-radius: 100px;
  color: white;
  cursor: pointer;
}
.scroll-animation::after {
  content: '';
  height: 25px;
  width: 10px;
  display: block;
  margin: 0 auto;
  border: 2px solid white;
  border-radius: 10px;
}
.scroll-animation::before {
  content: '';
  display: block;
  height: 10px;
  width: 0;
  left: 49%;
  animation: 2s top infinite;
  border: 1px solid white;
  border-radius: 10px;
  position: absolute;
}
@keyframes top {
  /* 0% {
    opacity: 0;
    transform: translateY(10px);
  } */
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (max-width: 450px) {
  .my-scroll-up {
    bottom: 10px;
    transform: translateX(5px) scale(0.7);
  }
}
.demo-is-top {
 left: 94%;
 top: 10vh;
 background: border-box;
}
/* .demo-pointer {
  left: 50vw;
  top: 50vh;
} */
</style>