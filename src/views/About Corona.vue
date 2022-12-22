<template>
<div class="About pt-4">
  <div class="container m-5 Asbout">
    <div class="row d-flex">
      <div class="col-lg-7">
        <div class="myaText">
            <h4 class="in text-primary mb-3">ABOUT THE DISEASE</h4>
            <h1>CORONAVIRUS(COVID-19)</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa mollitia reiciendis quo aliquam alias omnis illo accusamus blanditiis labore. Explicabo distinctio temporibus ipsam placeat eius inventore dolorum consequuntur, laudantium nesciunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloribus iusto quisquam autem, animi reiciendis rerum, sed, minus suscipit explicabo quibusdam! Ab suscipit nesciunt ex blanditiis, voluptatum excepturi sint nobis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus quibusdam, sint, blanditiis consectetur repellat incidunt nisi voluptatum quidem officiis optio ut porro explicabo quo dolores! Vel temporibus reiciendis enim.</p>
        </div>
      </div>
      <div class="col-lg-5 ml-5">
        <div class="myText">
           <div class="list-group">
          <a   class="list-group-item list-group-item-action active" aria-current="true">
              How coronavirus is spread
          </a>
             
              <button type="button" class="list-group-item list-group-item-action text-primary p-3">How coronavirus is spread.   <span><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#134bdf'  ></i></span></button>
              <button type="button" class="list-group-item list-group-item-action text-primary p-3">Symptoms of coronavirus.     <span><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#134bdf'  ></i></span></button>
              <button type="button" class="list-group-item list-group-item-action text-primary p-3">How to protect yourself.     <span><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#134bdf'  ></i></span></button>
              <button type="button" class="list-group-item list-group-item-action text-primary p-3">How to protect yourself.     <span><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#134bdf'  ></i></span></button>
              <button type="button" class="list-group-item list-group-item-action text-primary p-3">Treatment for coronavirus.   <span><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#134bdf'  ></i></span></button>
              <button type="button" class="list-group-item list-group-item-action text-primary p-3">Myth-Busters of coronavirus. <span><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#134bdf'  ></i></span></button>
              <button type="button" class="list-group-item list-group-item-action text-primary p-3">Questions & answers.         <span><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#134bdf'  ></i></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--=====================box-1============== -->
    <div class="Symptoms">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-12 wow bounceIn">
                    <div class="toMy">
                        <h4 class="text-primary wow slideInLeft">HOW CORONAVIRUS IS SPREAD</h4>
                        <h1>TRANSMISSION OF COVID-19</h1>
                        <P>Because it'sa new illness, we do not know exactly how coronavirus spreads
                            from person to person. Similar viruses are spread in cough droplets....
                        </P>
                    </div>
                </div>
                    
               
        <div class="col-12 col-md-12 col-lg-4 p-5 ml-5">
                <div class="card text-center pb-2 wow slideInLeft" data-wow-duration="2s" data-wow-offset="250" >
                    <img src="../assets/imgs/spread-3.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3>person-to-person spread,as,close contact.with.infected</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                  
                </div>

                <div class="col-12 col-md-12 col-lg-4 p-5">
                <div class="card text-center pb-2 wow slideInDown" data-wow-duration="2s" data-wow-offset="250">
                    <img src="../assets/imgs/spread-4.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3>person-to-person spread,as,close contact.with.infected</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                  
                </div>

                <div class="col-12 col-md-12 col-lg-4 p-5 mr-5">
                <div class="card text-center pb-2 wow slideInLeft" data-wow-duration="2s" data-wow-offset="250">
                    <img src="../assets/imgs/spread-5.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3>person-to-person spread,as,close contact.with.infected</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                  
                </div>

       </div>
       
          <button class="btn btn-primary rounded-pill wow slideInDown">? Have question about spreading ?</button>
  
   
  </div>
</div>
<!--========================= /box-1================= -->

</template>
<script>

export default {
  name:'About',
 
  

}
</script>


<style scoped>
.Asbout{
  background-color: rgb(245, 238, 238);
  text-align: center;

 
}
.myaText{
 margin-top: 60px;
 margin-bottom: 20px;
 margin-left: 10px;
 background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding: 14px;
}
.myaText h1{
  text-transform: uppercase;
  font-weight:bold;
  font-size: 45px;
  margin-bottom: 40px;
}
.myText{
   margin: 80px 35% ;
   width: 63%;
   height: 20%;
   
}
.imge img {
  width: 13px;
  height: 14px;
  margin: 5px 7px;
  color: #3789eb;
}
.myaText p{
  padding: 14px;
}

/* <!--=========================box-1================= --> */
.toMy{
    margin-top: 5%;

}
.toMy h1{
    font-size: 60px;
    font-weight:bold;
}
.toMy h4{
     font-weight:800;
}
.toMy p{
   width: 54%;
   margin-left: 22%;
   text-align: center;
   font-weight:600;
   color: secondary;
}
.card{
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.card-body{
    border-top: solid  5px hsl(214, 73%, 50%);
}

.card h3{
    color:#2274dd;
    font-size: 20px;
    font-weight: 400;
}
/* <!--========================= /box================= --> */
</style>