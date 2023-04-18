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
       </div>
       <div class="col-md-6">
        <img :src="getIMGPath(seguro.img)">
       </div>
    </div>
</section>
  
</template>

<script>
export default {
  props: {
        id:{
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
          descripcion: "En nuestra compañía de seguros, entendemos que proteger a tus seres queridos es tu prioridad número uno. Es por eso que ofrecemos un seguro de vida diseñado para brindarte tranquilidad y protección financiera en caso de cualquier imprevisto. Nuestro seguro de vida te permite elegir la cobertura que necesitas para tu situación específica, con opciones que incluyen la protección ante fallecimiento, incapacidad y enfermedades graves. Además, te brindamos la flexibilidad de elegir la duración del seguro y la cantidad de la cobertura que necesitas. En caso de cualquier eventualidad, nuestros expertos te brindarán la atención personalizada que necesitas para hacer frente a la situación. Además, nuestro proceso de reclamo es rápido y sencillo, para que puedas recibir la protección financiera que necesitas en el momento que más lo necesitas. En nuestra compañía de seguros, nos enorgullecemos de brindarte opciones de seguro de vida de alta calidad a precios accesibles.",
          img: 'seguro-de-vida.jpg'
         },
         {
          id: '2',
          tipo: 'Retiro',
          descripcion: 'En nuestra compañía de seguros, sabemos que tu retiro es una de las etapas más importantes de tu vida. Por eso, ofrecemos un seguro de retiro diseñado para brindarte tranquilidad y protección financiera en esta etapa crucial. Nuestro seguro de retiro te permite ahorrar de manera sistemática durante tu vida laboral, para que puedas disfrutar de una vida digna y sin preocupaciones durante tu retiro. Te ofrecemos la posibilidad de elegir el monto de tu ahorro, la duración del seguro y la forma en que recibirás los beneficios. No esperes más para proteger tu futuro y disfrutar de un retiro sin preocupaciones. Obtén ahora mismo tu seguro de retiro con nosotros. Contáctanos hoy para conocer más detalles y solicitar tu cotización.',
          img: 'retiro.jpg',
         },
         {
          id: '3',
          tipo: 'Mujer',
          descripcion: 'En nuestra compañía de seguros, sabemos que las mujeres tienen necesidades únicas en cuanto a su protección financiera. Es por eso que ofrecemos un seguro de mujer diseñado para brindarles la tranquilidad y protección que necesitan en cada etapa de sus vidas. Nuestro seguro de mujer incluye opciones de protección ante enfermedades graves, cuidados prenatales, partos y lactancia, entre otros. Además, nos aseguramos de que nuestras opciones de seguro de mujer sean accesibles y adaptables a las necesidades y presupuesto de cada mujer. No esperes más para proteger tu futuro y el de tus seres queridos. Obtén ahora mismo tu seguro de mujer con nosotros. Contáctanos hoy para conocer más detalles y solicitar tu cotización.',
          img: 'women.jpeg',
         },
         {
          id: '4',
          tipo: 'Autos',
          descripcion: 'En nuestra compañía de seguros, sabemos que tu auto es una parte fundamental de tu vida diaria. Es por eso que ofrecemos un seguro de autos diseñado para brindarte la tranquilidad y protección que necesitas mientras estás en la carretera. Nuestro seguro de autos incluye opciones de protección ante accidentes, daños a terceros, robo y vandalismo, entre otros. Además, nos aseguramos de que nuestras opciones de seguro de autos sean adaptables a tus necesidades y presupuesto. No esperes más para proteger tu auto y disfrutar de la tranquilidad en la carretera. Obtén ahora mismo tu seguro de autos con nosotros. Contáctanos hoy para conocer más detalles y solicitar tu cotización.',
          img: 'auto.jpg',
         },
         {
          id: '5',
          tipo: 'Finanzas',
          descripcion: 'En nuestra compañía de seguros, sabemos que las finanzas personales son un tema delicado y que es importante contar con protección financiera en caso de cualquier eventualidad. Es por eso que ofrecemos un seguro de finanzas personales diseñado para brindarte la tranquilidad y protección que necesitas para mantener tus finanzas en orden. Nuestro seguro de finanzas personales incluye opciones de protección ante robo de identidad, pérdida de ingresos, gastos inesperados y más. Además, nos aseguramos de que nuestras opciones de seguro de finanzas personales sean adaptables a tus necesidades y presupuesto. No esperes más para proteger tus finanzas personales y disfrutar de la tranquilidad de saber que estás protegido. Obtén ahora mismo tu seguro de finanzas personales con nosotros. Contáctanos hoy para conocer más detalles y solicitar tu cotización.',
          img: 'opfinanzas.jpeg',
         },
         {
          id: '6',
          tipo: 'Gastos',
          descripcion: 'En nuestra compañía de seguros, sabemos que enfrentar una enfermedad o accidente puede ser una situación difícil y costosa. Es por eso que ofrecemos un seguro de gastos médicos mayores diseñado para brindarte la tranquilidad y protección que necesitas mientras te recuperas. Nuestro seguro de gastos médicos mayores incluye opciones de protección ante hospitalización, cirugías, tratamientos especializados, medicamentos y más. Además, nos aseguramos de que nuestras opciones de seguro de gastos médicos mayores sean adaptables a tus necesidades y presupuesto. No esperes más para proteger tu salud y la de tus seres queridos. Obtén ahora mismo tu seguro de gastos médicos mayores con nosotros. Contáctanos hoy para conocer más detalles y solicitar tu cotización.',
          img: 'gastos.jpeg',
         },
      ]
      }
    },
    methods: {
      loadSeguro(){
        this.seguro = this.dataSeguros.find(seg => seg.id == this.id)
        
        this.getIMGPath(this.seguro.img)
        console.log(this.seguro);
      },
      getIMGPath(img) {
      return img ? require("@/assets/img/" + img) : "";
    }
    },
    created(){
        this.loadSeguro()
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