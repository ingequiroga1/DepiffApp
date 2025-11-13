<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary  src="@/assets/img/bgDrawer.jpg">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logodp.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title text-white">Depiff</v-list-item-title>
            <v-list-item-subtitle class="text-white">WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item  v-for="([icon, text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
          <v-list-item-icon class="justify-center">
            <v-icon color="#ffffff">{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1 text-white">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :color="color" :flat="flat" dark class="px-15" :class="{ expand: flat }">
      <v-toolbar-title>
        <a href="/">
          <v-img src="@/assets/img/logodprz.png" to="/"   max-width="180"
        height="60"
          cover alt="Logo Depiff" />
        </a>
        
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" color="primary" />
      <div v-else>
        <v-btn text to="/remates">
          <span class="mr-2 text-white">Inmobiliaria</span>
        </v-btn>
        <v-btn text to="/seguros">
          <span class="mr-2 text-white">Seguros</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2 text-white">Ofertas</span>
        </v-btn>
        <v-btn text color="primary" to="/servicios">
          <span class="mr-2 text-white">Servicios</span>
        </v-btn>
        <v-btn rounded color="primary" @click="$vuetify.goTo('#pricing')">
          <span class="mr-2 text-white">Cotiza ahora</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Principal", "#hero"],
      ["mdi-information-outline", "Servicios", "#features"],
      ["mdi-download-box-outline", "Quienes Somos", "#download"],
      ["mdi-currency-usd", "Cotizador", "#pricing"],
      ["mdi-email-outline", "Contacto", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}


</style>