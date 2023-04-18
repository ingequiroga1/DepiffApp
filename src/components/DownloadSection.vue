<template>
    <section id="download">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col sm="4" class="hidden-xs-only"> logodepiff
                <v-img src="@/assets/img/logodepiffnew.png" class="d-block ml-auto mr-auto" max-width="350px" />
              </v-col>
              <v-col cols="12" sm="8" class="white--text text-left">
                <h1>Despacho profecional de <br> <span style="color: #ffc107; font-size: 2.1em">INVERSIONES</span><br>financieras para el futuro</h1>
                <p style="font-size: 18px">
                 <b>DEPIFF</b> somos un importante intermediario de seguros y servicios financieros, que con nuestra experiencia y capacidad brindamos la mejor gestión entre nuestros clientes y la Compañía y/o Institución Financiera.
                </p>
                <v-btn rounded outlined href="https://wa.me/14772735165?text=Contactar%20un%20asesor%20Seguros%20Depiff" target="_blank" large color="white" class="mt-4">
                  Contactar asesor
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <style scoped>
  #download {
    background-image: url("~@/assets/img/quienes-somos.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 500px;
  }
  
  #download .container,
  #download .row {
    height: 100%;
  }
  </style>