<template>
<nav class="navbar navbar-expand-lg  fixed-top " style="background-color: #e3f2fd;">
  <div class="container">
    <RouterLink class="navbar-brand" to="/">C<span class="imga"><img src="../assets/imgs/TitleIcon.png" alt=""></span>VID19 </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <RouterLink class="nav-link active text-primary " aria-current="page" to="/Home">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link " to="/About Corona">About Corona</RouterLink>
        </li>
      
        <li class="nav-item">
          <RouterLink class="nav-link" to="/Symptoms">Symptoms</RouterLink>
        </li>
      
        <li class="nav-item">
          <RouterLink class="nav-link" to="/Prevention">Prevention</RouterLink>
        </li>
      
        <li class="nav-item">
          <RouterLink class="nav-link" to="/Treatment">Treatment</RouterLink>
        </li>
      
        <li class="nav-item">
          <RouterLink class="nav-link" to="/FAQ">FAQ</RouterLink>
        </li>
      
        <li class="nav-item">
          <RouterLink class="nav-link text-primary" to="/News">News</RouterLink>
        </li>
      
      </ul>
    
        <RouterLink class="btn btn-outline-primary rounded-pill" to="/">Do & Don't</RouterLink>
    
    </div>
  </div>
</nav>
</template>
<script>
export default{
    name:"Navbar"
}

</script>

<style>
.nav{
  position: relative;
}
.nav-item{
  font-weight: 400;
  border-radius: 2px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.nav-link:hover{
  background: rgba(0, 112, 248, 0.3);
  border-radius: 20px ;
}

 .nav-link{
  color: rgb(0, 0, 0)!important;

 }
 .nav-link:hover{
  color: rgb(223, 132, 64) !important;
  transition:.2s;
  border-top:solid 3px rgb(223, 132, 62); 
  font-weight: bold;  
 } 
 .navbar-nav li a{
  margin-left: 40px;
 }
 .imga img{
  width: 20px;
  height: 20px;
 }
 

</style>



