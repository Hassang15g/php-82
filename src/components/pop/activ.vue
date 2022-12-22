<template>
     <div  class="col">
        <div id="elzero-app" class="card-2">
            <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bold">What is a novel coronavirus? <span @click="show = !show" ><i class='bx bx-plus'></i></span> </li>
                    <div v-if="show" class="clck1">
                        <span @click="show = !show" ><i class='bx bx-minus'></i></span>
                            <h2 class="text-primary">Why is the disease being called coronavirus disease 2019,COVID-19?</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Qui inventore neque voluptatum vel libero. Maxime, molestiae saepe tenetur eius itaque maiores
                                    quidem laborum aliquam fuga ipsa repellendus culpa eveniet corporis!
                                </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellendus 
                                id inventore fuga, eaque eius sed. A qui provident esse vel aperiam laborum? Eligendi
                                eos voluptatum voluptates inventore porro ducimus.
                            </p>
            </div>
<hr>
        <li class="list-group-item fw-bold">Why is th disease being called called coronavirus disease 2019,COVID-19?
                <span @click="active = !active"><i class='bx bx-plus'></i></span>
            </li>
                <div v-show="active" class="clck1">
                    <span @click="active = !active" ><i class='bx bx-minus'></i></span>
                        <h2 class="text-primary">Why is the disease being called coronavirus disease 2019,COVID-19?</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Qui inventore neque voluptatum vel libero. Maxime, molestiae saepe tenetur eius itaque maiores
                                quidem laborum aliquam fuga ipsa repellendus culpa eveniet corporis!
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellendus 
                                id inventore fuga, eaque eius sed. A qui provident esse vel aperiam laborum? Eligendi
                                eos voluptatum voluptates inventore porro ducimus.
                    </p>
            </div>
<hr>
        <li class="list-group-item fw-bold">How can people help stop stigma related to COVID-19? 
                <span @click="actives = !actives"><i class='bx bx-plus'></i></span>
            </li>
                <div v-show="actives" class="clck1">
                    <span @click="actives = !actives" ><i class='bx bx-minus'></i></span>
                        <h2 class="text-primary">Why is the disease being called coronavirus disease 2019,COVID-19?</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Qui inventore neque voluptatum vel libero. Maxime, molestiae saepe tenetur eius itaque maiores
                                quidem laborum aliquam fuga ipsa repellendus culpa eveniet corporis!
                            </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellendus 
                            id inventore fuga, eaque eius sed. A qui provident esse vel aperiam laborum? Eligendi
                            eos voluptatum voluptates inventore porro ducimus.
                        </p>
                </div>
<hr>
                        <li class="list-group-item fw-bold">Why might someone blame or avoid individuals and groups? 
                            <span @click="activec = !activec"><i class='bx bx-plus'></i></span>
                            </li>
                            <div v-show="activec" class="clck1">
                                            <span @click="activec = !activec" ><i class='bx bx-minus'></i></span>
                                                <h2 class="text-primary">Why is the disease being called coronavirus disease 2019,COVID-19?</h2>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                                    Qui inventore neque voluptatum vel libero. Maxime, molestiae saepe tenetur eius itaque maiores
                                                    quidem laborum aliquam fuga ipsa repellendus culpa eveniet corporis!
                                                </p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellendus 
                                                id inventore fuga, eaque eius sed. A qui provident esse vel aperiam laborum? Eligendi
                                                eos voluptatum voluptates inventore porro ducimus.
                                                </p>
                                            </div>
                                        </ul>
                                    </div>
                                </div> 
</template>



<script>
export default {
    name:'pop',
  data() {
    name:"Modal"
    return {
      show: false,
      active: true,
      actives:false,
      activec:false,
    }
  }
}
</script>

<style>
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