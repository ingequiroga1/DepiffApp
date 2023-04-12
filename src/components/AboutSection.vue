<template>
    <section id="about">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col cols="12" md="7">
                <h1 class="font-weight-light display-2">Sobre</h1>
                <h1 class="font-weight-light display-1 mb-3">
                  Depiff Seguros!
                </h1>
                <v-row>
                  <v-col cols="12" class="d-flex align-center">
                    <v-img
                      src="@/assets/img/icon1.svg"
                      max-width="60px"
                      class="mr-4"
                    />
                    <p class="text-justify">
                      Somos una compañía de seguros comprometida con la protección de nuestros clientes y sus seres queridos.
                    </p>
                  </v-col>
                  <v-col cols="12" class="d-flex align-center">
                    <v-img
                      src="@/assets/img/icon2.svg"
                      max-width="60px"
                      class="mr-4"
                    />
                    <p class="text-justify">
                      Nos esforzamos por ofrecer un servicio de calidad, con una atención al cliente 
                      excepcional y una rápida resolución de cualquier problema o reclamación que pueda 
                      surgir. Nuestra prioridad es asegurarnos de que nuestros clientes estén 
                      protegidos en todo momento.
                    </p>
                  </v-col>
                  <v-col cols="12" class="d-flex align-center">
                    <v-img
                      src="@/assets/img/icon3.svg"
                      max-width="60px"
                      class="mr-4"
                    />
                    <p class="text-justify">
                      Además de nuestros productos de seguros, también ofrecemos asesoramiento y 
                      guía en cuestiones relacionadas con la seguridad y prevención de riesgos, 
                      de manera que nuestros clientes puedan evitar situaciones imprevistas y minimizar 
                      los daños en caso de que se produzcan.
                    </p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="5" class="d-none d-md-flex">
                <v-img
                  src="@/assets/img/family.svg"
                  class="d-block ml-auto mr-auto"
                  max-width="400px"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <style scoped>
  #about {
    background-color: #f4f7f5;
  }
  </style>
  