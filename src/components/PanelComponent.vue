<template>
  <v-container class="panel-container" fluid>
    <v-card class="pa-8 text-center mx-auto rounded-xl" max-width="600">
      <h2 class="headline font-weight-bold mb-6">DEPIFF SEGUROS</h2>

      <v-row justify="center" align="center">
        <v-col
          v-for="item in items"
          :key="item.title"
          cols="6"
          sm="4"
          class="d-flex justify-center"
        >
          <div class="circle-wrapper">
            <v-btn
              class="circle-btn"
              color="blue lighten-5"
              elevation="3"
              :to = item.link
              fab
            >
              <v-icon large color="primary">{{ item.icon }}</v-icon>
            </v-btn>
            <span class="circle-text">{{ item.title }}</span>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "InsurancePanel",
  data() {
    return {
      items: [
        { title: "Inmobiliaria", icon: "mdi-home", link: "/remates" },
        { title: "Seguros", icon: "mdi-heart-pulse", link: "/seguros/hogar" },
        { title: "Ofertas", icon: "mdi-car", link: "/seguros/salud" },
        { title: "Servicios", icon: "mdi-office-building", link: "/seguros/empresa" },
        { title: "Cotizador", icon: "mdi-stethoscope", link: "/seguros/medico" },
        { title: "Otros", icon: "mdi-airplane", link: "/seguros/viaje" },
      ],
    };
  },
  methods: {
    goTo(url) {
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.panel-container {
  background-color: #f6f9ff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

/* Botón perfectamente circular */
.circle-btn {
  width: 120px !important;
  height: 120px !important;
  border-radius: 50% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.circle-btn:hover {
  transform: translateY(-5px);
  background-color: #e3f2fd !important;
}

/* Texto debajo del ícono */
.circle-text {
  font-size: 0.9rem;
  color: #1a237e;
  font-weight: 500;
  text-align: center;
}
</style>
