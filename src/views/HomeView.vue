<template>
  <v-app>
    <NavBar :color="color" :flat="flat"/>
    <v-main class="pt-0">
     
      
      <home-section/>
      <!-- 
       <PanelComponent />
      <AboutSection />
      <DownloadSection />
      <PricingSection />
      <ContactSection /> -->
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <FooterVue />
  </v-app>
</template>

<style scoped>
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
  import NavBar from '../components/NavBar'
   import HomeSection from '@/components/HomeSection.vue';
  // import FooterVue from '@/components/FooterVue.vue';
  // import AboutSection from '@/components/AboutSection.vue';
  // import DownloadSection from '@/components/DownloadSection.vue';
  // import PricingSection from '@/components/PricingSection.vue';
  // import ContactSection from '@/components/ContactSection.vue';
//import PanelComponent from '@/components/PanelComponent.vue';


  export default {
    name: 'HomeComponent',

    components: {
      NavBar,
       HomeSection,
      // FooterVue,
      // AboutSection,
      // DownloadSection,
      // PricingSection,
      // ContactSection,
      //PanelComponent

    },

    data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },

  }
</script>


