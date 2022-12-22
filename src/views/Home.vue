<template>
  <!-- Home -->
  <div class="Home">
    
    <div class="container">
      <div class="row">
        <div class=" col-lg-6  mt-5 pb-5">
          <div class="my-text">
            <div class="d-flex">
              <h1 class="wow bounceInDown">CORONA</h1>
              <div class="min mt-2 wow bounceIn">
                <h4 class="text-danger">COVID-19</h4>
                <h4 class="text-body">VIRUS</h4>
              </div>
            </div>
            <div class="p">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit pariatur repellat ipsam, dolore adipisci unde earum
                velitnostrum a.Nulla asperiores aspernatur facilis eveniet,
                commodi tempore delectus voluptatum. Modi, quam!
              </p>
            </div>
            <div class="btn">
              <button class="btn btn-primary rounded-pill"> How To Protect    <span ><i class='bx bx-shield-quarter' style='color: #000; width:20px;' ></i></span>
              </button>
              <button class="btn btn-outline-primary rounded-pill m-5">How To Protect     <span><i class='bx bx-arrow-back bx-rotate-180 ' style='color:#134bdf'  ></i></span>
              </button>
            </div>
        

         <div class="three ">
            <div class="nums">
            <div class="num">
              <h5>WORLDWIDE.CASES</h5>
           <VueJsCounter start="100" end="1999" duration="3000" thousand="." decimal=","></VueJsCounter>
            </div>

            <div class="num">
                <H5>DEATHS</H5>
              <VueJsCounter start="100" end="467432" duration="3000" thousand="." decimal=","></VueJsCounter>
            </div>
            <div class="num">
              <H5>RECOUERD</H5>
              <VueJsCounter start="100" end="4556091" duration="3000" thousand="." decimal=","></VueJsCounter>
            </div>
          </div>
   
            </div>
            <p class="finsh">
              *Last Updated Jun,21,2020,09:24 AM Amenca/Chicago
            </p>
          </div>
        </div>
        <div class="col-lg-6 pt-5 pb-5 ">
          <div class="imgs wow bounceInUp">
            <img  src="../assets/imgs/header-2.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
   
 <!-- <Footer/> -->
</template>
 
 <script>
  import VueJsCounter from 'vue-js-counter'
  export default {
        components: {
            VueJsCounter 
        }
    }
</script>




<style scoped>


.Home{
  margin-top: 5%;
 /* height: 100vh; */
}
.row {
  background-image: url(../assets/imgs/shape-1.png);
  /* max-height: 100vh; */
  width: 100%;
  background-position: center;
  background-size: cover;
  
}
.d-flex h1 {
  font-size: 100px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 7vh;
}
.min h4 {
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
}
.finsh {
  margin-top: 50px;
  color: #000;
}
.imge img {
  width: 13px;
  height: 14px;
  margin: 5px 7px;
  color: #3789eb;
}
.about {
  margin-top: 0vh;

}
.nums{
  width: 400px;
  display: flex;
}
.nums .num{
  flex: 1;
  text-align: center;
  font-size: 40px;
  padding: 20px;
  margin-left: -30px;
}
.imgs img{
  max-width:  100%;
  max-height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>

