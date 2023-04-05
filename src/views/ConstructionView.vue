<template>
            <div id="hero" class="row">
                <div class="col-md-6 text-center lside">
                    <div class="mt-5">
                        <img src="../assets/images/LOGODEPIFF.png">
                    </div>
                
                </div>
                <div class="col-md-6 rside">
                    <div class="mt-5">
                    <p>!Bienvenido a nuestro sitio web!</p>
                    <p class="lh-base">
                            Estamos trabajando arduamente para poder brindarle una experiencia 
                            en línea de calidad, con información clara y útil sobre los diferentes
                            tipos de seguros que ofrecemos.
                    </p>
                    <p class="lh-base">Nuestro objetivo es poder brindarle tranquilidad y seguridad en todas 
                            las áreas de su vida, a través de nuestros seguros personalizados 
                            y adaptados a sus necesidades. 
                            Estamos comprometidos en brindarle un servicio excepcional, 
                            y nuestro sitio web será una herramienta importante para lograrlo.</p>
                    <p class="lh-base">
                                Durante el proceso de construcción, estaremos actualizando 
                        regularmente el sitio con información nueva y relevante.
                    </p>
                    <p class="lh-base">
                                Mientras tanto, si necesita más información sobre nuestros servicios 
                        o desea hablar con uno de nuestros representantes de seguros, 
                        no dude en ponerse en contacto con nosotros.
                    </p>
                    </div>
                    <div class="text-center mt-5">
                        <a class="btn-info btn" href="https://wa.me/14772735165?text=Contactar%20un%20asesor%20Seguros%20Depiff">Contactar asesor</a>
                    </div>
                
                </div>
            </div>
            
    
  </template>
  
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  
  
  export default {
    name: 'ConstructionView',
    components: {
     // HelloWorld,
    }
  }
  </script>
  
 <style lang="scss" scoped>
  
  #hero
  {
    width: 100%;
    height: 100vh;
    margin-left: 0;
    margin-right: 0;
  }

  .rside{ 
    background-color: #2b4689;
    color: white;
    padding-right: 4em !important;
    padding-left: 4em !important;
  }

  .btn-info{
    color:white !important;
  }

 </style>
 
