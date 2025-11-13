
   <template>
    <v-app>
      <NavBar :color="color" :flat="flat"/>
      <v-main>
      <PricingSection />
      </v-main>
      <FooterVue />
    </v-app>
  </template>
  
<script>
import NavBar from '../../../components/NavBar.vue';
import PricingSection from '@/components/PricingSection.vue';
import FooterVue from '@/components/FooterVue.vue';
export default {
    data(){
        return{
          color: "#0511f2",
        }
    },
    components:{
    PricingSection,
    NavBar,
    FooterVue
   }
}
</script>

