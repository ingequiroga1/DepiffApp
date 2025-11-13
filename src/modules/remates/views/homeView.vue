
   <template>
    <v-app>
      <NavBar :color="color" :flat="flat"/>
     
  <!-- <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      <v-img
        class="mr-2"
        src="@/assets/img/logo.png"
        max-height="5rem"
        contain
      ></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/">Inicio</v-btn>
      <v-btn text to="/remates">Blog</v-btn>
      <v-btn text>Contacto</v-btn>
    </v-toolbar-items>

  </v-app-bar> -->

      <!-- <v-app-bar app color="primary" dark>
        <v-toolbar-title>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="cambiarPagina('/home')">Inicio</v-btn>
        <v-btn text>Blog</v-btn>
        <v-btn text>Contacto</v-btn>
      </v-app-bar> -->
      <v-main>
        <!-- Contenido de la página -->
        <v-container>
          <Entrada :titulo="titulo" :descripcion="texto" :imagen="img"/>
        </v-container>
        <ContactSection />
      </v-main>
      <!-- <v-footer color="primary" app>
        <span class="white--text">&copy; {{ new Date().getFullYear() }} Depiff</span>
      </v-footer> -->
      <FooterVue />
    </v-app>
  </template>
  
<script>
import NavBar from '../../../components/NavBar.vue';
import Entrada from "../components/entradaComp.vue";
import ContactSection from '@/components/ContactSection.vue';
import FooterVue from '@/components/FooterVue.vue';
export default {
    data(){
        return{
          color: "#0511f2",
          titulo: 'Qué es un remate bancario y cómo puedo comprar una casa bajo este proceso',
          texto:[`Un remate bancario es una forma de adquirir una propiedad inmobiliaria a un precio significativamente más bajo que el valor de mercado. Esta oportunidad surge cuando una propiedad es embargada por el banco debido a que el propietario no pudo pagar su hipoteca. En lugar de mantener la propiedad, el banco la pone a la venta en un remate para recuperar su inversión inicial.`,
`Para comprar una casa bajo este proceso, lo primero que debes hacer es investigar y buscar propiedades que estén en remate bancario. Esta información puede ser obtenida a través de bancos y otras instituciones financieras, así como a través de agentes inmobiliarios especializados en este tipo de transacciones.`,
`Una vez que encuentres una propiedad que te interese, debes hacer una oferta por ella. La oferta debe ser realizada por escrito y presentada al banco a través de un abogado. Si el banco acepta tu oferta, deberás hacer un depósito de al menos el 10% del valor de la propiedad. El resto del pago debe ser realizado en un plazo determinado, que generalmente es de entre 30 y 90 días.`,
`Es importante destacar que al comprar una propiedad en remate bancario, es posible que tenga algunos riesgos. Por ejemplo, la propiedad puede estar en mal estado o haber sido abandonada por algún tiempo, lo que puede requerir reparaciones y renovaciones adicionales. Además, es posible que existan otros acreedores que puedan tener reclamos sobre la propiedad.`,
`En resumen, un remate bancario puede ser una oportunidad interesante para adquirir una propiedad a un precio más bajo que el de mercado, pero también puede implicar algunos riesgos. Si estás considerando comprar una propiedad en remate bancario, es importante que hagas una investigación exhaustiva y que te asesores con expertos en el tema para tomar la mejor decisión.`],
            img: require("@/assets/img/remate.png")
        }
    },
    methods:{
      cambiarPagina(ruta){
      this.$router.push(ruta)
    }
    },
    components:{
    Entrada,
    ContactSection,
    NavBar,
    FooterVue
   }
}
</script>

