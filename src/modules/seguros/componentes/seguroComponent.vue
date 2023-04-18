<template>
  <section class="container mt60">
    <div class="row">
       <div class="col-md-6">
          <div>
               <h3>{{seguro.tipo}}</h3>
               <p style="margin-top: 30px">
               {{ seguro.descripcion }}
               </p>
          </div>
          <!-- <div class="lista">
            <ul>
              <li style="margin-top: 20px; margin-bottom: 20px"><i class="fa fa-check" style="margin-right: 10px; color: #0060d6"></i>item 1</li>
              <li style="margin-bottom: 20px"><i class="fa fa-check" style="margin-right: 10px; color: #0060d6"></i>item 2</li>
              <li style="margin-bottom: 20px"><i class="fa fa-check" style="margin-right: 10px; color: #0060d6;"></i>item 3</li>
            </ul>
          </div> -->
         
       </div>
       <div class="col-md-6">
        <!-- <img src="../../../assets/img/seguro-de-vida.jpg"> -->
        <img :src="getIMGPath(seguro.img)">
        
        <!-- <img :src='seguro.img'> -->
       </div>
    </div>
</section>
</template>

<script>
export default {
    props: {
        id:{
          default:'1',
            type:String,
            required: true
        }
    },
    data(){
      return {
        seguro:{
          id:'1',
          tipo:'',
          descripcion:'',
          img:'',
        },
        dataSeguros:[
         {
          id: '1',
          tipo: 'Vida',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: 'seguro-de-vida.jpg'
         },
         {
          id: '2',
          tipo: 'Autos',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: 'seguro-de-vida.jpg',
         },
      ]
      }
    },
    methods: {
      loadSeguro(){
        this.seguro = this.dataSeguros.find(seg => seg.id == this.id)
        this.getIMGPath(this.seguro.img)
        //console.log(this.seguro);
      },
      getIMGPath(img) {
      return img ? require("@/assets/img/" + img) : "";
    }
    },
    watch:{
    id(){
      this.loadSeguro()
   }
}
    
}
</script>

<style>

</style>