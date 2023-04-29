<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img :src="imagen" height="400px"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <h2>{{ titulo }}</h2>
        <p>{{ descripcion[0] }}</p>
        <p>{{ descripcion[1] }}</p>
        <p>{{ descripcion[2] }}</p>
        <p>{{ descripcion[3] }}</p>
        <p>{{ descripcion[4] }}</p>
      </v-col>
      <v-col cols="4" class="red-section">
      
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: 'ComponenteImagenDescripcion',
  props: {
    imagen: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    }
  }
};
</script>


<style>
.red-section {
  color: #304F8C;
  height: 400px;
  border-radius: 10px; /* Redondea los bordes del div */
  background-color: rgba(255, 255, 255, 0.5); /* Fondo con opacidad al 50% */
}


</style>