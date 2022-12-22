<template>
  <!-- Box-1-->
<div class="Treatment pt-5">
    <div class="shadow">
    <div class="container pb-5 pt-5 bob">
       <div class="row gx-5">
        <div class="col-lg-6">
            <div class="super pt-5 text-light ">
                <h5>BE CAREFULL & STAY SAFE</h5>
                <h1 class="text-light fw-bold pb-4">TREATMENT FOR CORONAVIRUS</h1>
                <p><span class="fw-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>  Suscipit, repudiandae vitae aliquam qui fugiat voluptas. Fuga modi, iure placeat soluta a, cum eos itaque molestias sapiente distinctio et? Earum, voluptate.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est neque, debitis quos labore error vero expedita repellendus vitae fugit quas!</p>
            </div>
        </div>
        <div class="col-lg-6 col-xs-12">
             <div class="box2 pt-5 ml-5">
                <h2>Self Care</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dignissimos earum beatae tempora repellendus debitis ex, aspernatur numquam delectus amet?</p>
                <p><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#fff' ></i>Rest and sleep</p>
                <p><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#fff' ></i>Keep Warm</p>
                <p><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#fff' ></i>Drink Plenty of liquids </p>
                <p><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#fff' ></i> Use a room humidifier or take a hot Shower
                to help ease throat and cough
                </p>
                <h4>Medical Treatments</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error tenetur repellat facilis quia consequatur. Iusto velit odit eveniet vitae aperiam laudantium, animi enim, voluptatum, consectetur itaque quidem maiores laboriosam.</p>
             </div>
        </div>
       </div>
    </div>
</div>
</div>
   <!-- Box-1-->
   <!-- ====================Box-2========================= -->
    <!-- Box-2 -->
<section>
    <div class="container-fluid padding pt-5">
        <div class="row text-center padding">
            <div class="col-lg-12 ">
                <div class="smol pt-5 ">
                  <h5 class="text-primary">BE CAREFULL & STAY SAFE</h5>
                    <h1 class="fw-bold pb-4">TREATMENT FOR CORONAVIRUS</h1>
                      <p><span class="fw-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>  Suscipit, repudiandae vitae aliquam qui fugiat voluptas. Fuga modi, iure placeat soluta a, cum eos itaque molestias sapiente distinctio et? Earum, voluptate.</p>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est neque, debitis quos labore error vero expedita repellendus vitae fugit quas!</p>
            </div>
        </div>
                <div class="container inx">
                    <div class="row">
                        <div class="col wow flipInX">
                <div class="imgx d-flex">
                    <p>Avoid Close Contact</p>
                 <i class='bx bxs-x-circle' style='color:#f61111' ></i>
                    <img  src="../assets/imgs/donts-a.png" alt="">
                </div>

                 <div class="imgx d-flex mt-4">
                    <p>Avoid Close Contact</p>
                  <i class='bx bxs-x-circle' style='color:#f61111' ></i>
                    <img  src="../assets/imgs/donts-a.png" alt="">
                    
                </div>

                 <div class="imgx d-flex mt-4">
                    <p>Avoid Close Contact</p>
                 <i class='bx bxs-x-circle' style='color:#f61111' ></i>
                    <img  src="../assets/imgs/donts-a.png" alt="">
                </div>
                        </div>
                        <div class="col-6 wow slideInDown">
                            <div class="img-6">
                                <img src="../assets/imgs/protect.png" alt="">
                            </div>
                        </div>
                        <div class="col  wow flipInX">
                <div class="imgY d-flex">
                    <img src="../assets/imgs/donts-a.png" alt="">
                    <i class='bx bxs-check-circle' style='color:#02ea1f'  ></i>
                    <p>Avoid Close Contact</p>
                </div>

                <div class="imgY d-flex mt-4">
                    <img  src="../assets/imgs/donts-a.png" alt="">
                    <i class='bx bxs-check-circle' style='color:#02ea1f'  ></i>
                            <p>Avoid Close Contact</p>
                </div>

                <div class="imgY d-flex mt-4">
                    <img  src="../assets/imgs/donts-a.png" alt="">
                    <i class='bx bxs-check-circle' style='color:#02ea1f'  ></i>
                       <p>Avoid Close Contact</p>
                    </div>
                        </div>
                    </div>
                </div>


               
            </div>
        </div>


    </section>

</template>
<script>
export default {
    name:'FAQ'
}
</script>
<style scoped>
.Treatment{
    background-image: url(../assets/imgs/shape-1.png);
    /* height: 100vh; */
    background-position: center;
    background-size: cover;

}
.shadow{
    /* height: 100vh;
    width: 100%; */
    
  background-color: rgba(2, 116, 255, 0.726) !important;
}
.super{
 margin-top: 40px;
}
.super h5{
    color: rgb(4, 237, 230);
}
.box2{
    color: #fff;
    padding: 30px;
    margin: 37px;
    margin-bottom: 40px !important;
    background: rgb(27 71 161);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
   /* <!-- ====================Box-2========================= --> */

.inx{
    margin-top: 10%;
}
.imgx img{
    width: 100px;
    border: solid 2px red;
    border-radius: 100px;
    position: relative;
}
.imgx .bx{
    position: absolute;
    top: 0;
    right: 0px;
    padding: 78px;
    
}
.imgx p{
    margin-top: 10%;
    padding-left: 10px;
    color: blue;
    font-weight: bold;
    
}
.img-6 img{
    width: 600px;
}
.imgY img{
     width: 100px;
    border: solid 2px rgb(38, 255, 0);
    border-radius: 100px;
    position: relative;
}
.imgY p{
      margin-top: 10%;
      padding-left: 10px;
      color: blue;
      font-weight: bold;
}
.imgY .bx{
    position: absolute;
    top: 0;
    right: 55px;
    left: -200px;
    padding: 78px;
}
</style>