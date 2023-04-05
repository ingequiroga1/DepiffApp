<template>
  <NavBar @goToSeccion = "moveToSection($event)"/>
  <div id="hero" class="col-md-12 fazul text-center">
      <img src="../assets/images/LOGODEPIFF.png">
      <h1 style="font-size: 5em; padding-top: 15%; padding-bottom:15%">Depiff</h1>
  </div>
  <div id="nosotros"></div>
  <div id="acerca"></div>
</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  methods:{
    moveToSection(event){
     // console.log(event);
       let element = document.getElementById(event)
       let x = element.offsetLeft;
       let y = element.offsetTop;

       window.scrollTo(x,y);
    }
  },
  components: {
   // HelloWorld,
    NavBar
  }
}
</script>

<style>
#hero
{

  width: 100%;
  height: 100vh;
}

#nosotros
{
  background: yellow;
  width: 100%;
  height: 100vh;
}
#acerca
{
  background: blue;
  width: 100%;
  height: 100vh;
}

</style>
