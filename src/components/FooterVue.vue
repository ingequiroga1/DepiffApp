<template>
    <v-footer dark padless>
      <v-card flat tile class="secondary white--text text-center">
        <v-card-text>
          <v-btn
            v-for="(icon, i) in icons"
            :key="i"
            class="mx-4 white--text"
            :href="icon.link"
            target="_blank"
            icon
          >
            <v-icon size="24px">{{ icon.text }}</v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
          Gracias por visitar nuestro sitio web. En nuestra compañía de seguros 
          nos comprometemos a brindar la mejor protección para nuestros clientes 
          y sus seres queridos. Si tiene alguna pregunta o necesita ayuda, 
          no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarlo. 
          ¡Manténgase seguro y protegido!.
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Depiff</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </template>
  
  <style scoped>
  .v-card {
    width: 100%;
  }
  </style>
  
  <script>
  export default {
    data: () => ({
      icons: [
        {
          text: "mdi-facebook",
          link: "",
        },
        {
          text: "mdi-twitter",
          link: "",
        },
        {
          text: "mdi-linkedin",
          link: "",
        },
        {
          text: "mdi-instagram",
          link: "https://instagram.com/joabson_arley/",
        },
      ],
    }),
  };
  </script>
  