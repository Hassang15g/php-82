<template>
<div class="News text-center pb-5 pt-5">
    <div class="container pb-5 pt-5">
        <div class="row">
            <div class="col">
                <div class="csrd">
                    <div class="btn-1">
                        <button @click="showPopup =!showPopup" class="btn btn-outline-primary w-100 fw-bold">CORONAVIRUS Disease 2019 Basics <span><i class='bx bxs-right-arrow' style='color:#1643d5'  ></i></span> </button>
                        </div>
                    <div class="btn-1 ">
                        <button @click="sowPop =!sowPop" class="btn btn-outline-primary w-100 fw-bold" >How It Spreads <span><i class='bx bxs-right-arrow' style='color:#1643d5'  ></i></span> </button>
                        </div>
                    <div class="btn-1">
                        <button  @click="activ=!activ" class="btn btn-outline-primary w-100 fw-bold" >How to Protect Yourself <span><i class='bx bxs-right-arrow' style='color:#1643d5'  ></i></span> </button>
                        </div>
                    <div class="btn-1">
                        <button  @click="popv =!popv" class="btn btn-outline-primary w-100 fw-bold" >Symptoms & Testing <span><i class='bx bxs-right-arrow' style='color:#1643d5'  ></i></span> </button>
                        </div>
                    <div class="btn-1">
                        <button  @click="pops =!pops" class="btn btn-outline-primary w-100 fw-bold" >Outbreak in Your Community <span><i class='bx bxs-right-arrow' style='color:#1643d5'  ></i></span> </button>
                        </div>
                    <div class="btn-1">
                        <button  @click="popu =!popu" class="btn btn-outline-primary w-100 fw-bold" >Myth-Busters of coronavirus <span><i class='bx bxs-right-arrow' style='color:#1643d5'  ></i></span> </button>
                        </div>
                </div>
            </div>

<div class="col">
<pop v-show="showPopup"/>
<sowPop v-show="sowPop"/>
<activ v-show="activ"/>
<popv v-show="popv"/>
<pops v-show="pops"/>
<popu v-show="popu"/>

</div>
        </div>
    </div>
</div>
</template>

<script>
import pop from '../components/pop/pop.vue'
import sowPop from '../components/pop/sowPop.vue'
import activ from '../components/pop/activ.vue'
import popv from '../components/pop/popv.vue'
import pops from '../components/pop/pops.vue'
import popu from '../components/pop/popu.vue'
export default{
  name:'fff',
  components:{
    pop,
    sowPop,
    activ,
    popv,
    pops,
    popu,
  },
  data() {
    return{
      showPopup:true,
      sowPop:false,
      activ:false,
      popv:false,
      pops:false,
      popu:false,
    }
  }

 }
  
</script>

<style>
.btn-1{
    padding: 10px;
}

.btn-1 span i{
     padding-left: 95%;
    
}

.card-2{
    padding: 10px;
    width: 50rem;
    margin-right: 20px;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.card-2 h4{
    padding: 10px;
    border: solid 2px rgb(7, 115, 222);

}
.card-2 span i{
   padding-left: 45rem;
    font-size: 25px;
   
}
.card-2 span i:hover{
    color:#0f42e8;
}
.clck1 p{
    padding: 10px;
}
.clck1 h2{
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
}
</style>