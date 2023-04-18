<template>
  <v-app>
    <section id="cabecera" style="margin-bottom: 30px;">
    <div class="text-center bgazul" style="padding-top: 5%; overflow: hidden;">
      <h1>Seguros - Depiff</h1>
      <div class="container" style="margin-top: 50px;">
           <div class="row">
              <div class="col-md-2 conticon" style="padding-top: 20px"> 
                 <div>
                    <div class="d-flex justify-content-center">
                       <a @click="mostrar('1')" class="hd-icons">
                        <i class="fa fa-heart"></i>
                       </a>
                    </div>
                    <h4>Vida</h4>
                 </div>
              </div>
              <div class="col-md-2 conticon" style="padding-top: 20px">
                <div class="d-flex justify-content-center">
                   <a @click="mostrar('2')"  class="hd-icons">
                    <i class="fa fa-plane"></i>
                   </a>
                </div>
                <h4>Retiro</h4>
              </div>
              <div class="col-md-2   conticon" style="padding-top: 20px">
                <div class="d-flex justify-content-center">
                   <a @click="mostrar('3')" class="hd-icons">
                    <i class="fa fa-female"></i>
                   </a>
                </div>
                <h4>Mujer</h4>
              </div>
              <div class="col-md-2  conticon" style="padding-top: 20px">
                <div class="d-flex justify-content-center">
                   <a @click="mostrar('4')" class="hd-icons">
                    <i class="fa fa-car"></i>
                   </a>
                </div>
                <h4>Autos</h4>
              </div>
              <div class="col-md-2  conticon" style="padding-top: 20px">
                <div class="d-flex justify-content-center">
                   <a @click="mostrar('5')" class="hd-icons">
                    <i class="fa fa-money"></i>
                   </a>
                </div>
                <h4>Finanzas</h4>
              </div>
              <div class="col-md-2  conticon" style="padding-top: 20px">
                <div class="d-flex justify-content-center">
                   <a @click="mostrar('6')" class="hd-icons">
                    <i class="fa fa-ambulance"></i>
                   </a>
                </div>
                <h4>Gastos</h4>
              </div>
           </div>
      </div>
  </div>
</section>
<router-view />
<FooterVue/>
</v-app>
</template>

<script>
import FooterVue from '@/components/FooterVue.vue';
export default {
data(){
   return {
   
   }
},
methods: {
   mostrar(id){
      console.log(id);
      this.$router.push({name:'datos',params:{id:id}})
   },
 
},
components: {
      FooterVue,
    },



}
</script>

<style scoped>
.bgazul{
    background: #2b4689;
    color: #fff;
}

.conticon:hover {
  background: #ffffff;
  color: #2B4689;
   
}

.conticon a.hd-icons{

display: block;
 position: relative;
 border: 1px solid #ffffff;
 width: 50px;
 height: 50px;
 font-size: 30px;
 line-height: 45px;
 text-align: center;
 border-radius: 50%;
 color: #ffffff;
 -webkit-transition: color .3s ease-in-out;
 -o-transition: color .3s ease-in-out;
 transition: color .3s ease-in-out;
}



.conticon:hover a.hd-icons{
border: 1px solid #2B4689;
color: #2B4689;

}

</style>

