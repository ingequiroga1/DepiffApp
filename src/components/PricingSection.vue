<template>
    <section id="pricing" class="pb-8">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-card style="width: 100%">
              <h1 class="text-center pt-6 font-weight-light display-2">Servicios</h1>
              <v-divider class="my-6"></v-divider>
              <v-row class="text-center">
                <v-col class="col-12 col-sm-6 col-md-4">
                  <div class="flex-center">
                    <v-card-text>
                      <div class="flex-center">
                        <div class="circle1">
                          <div class="circle2">
                            <v-img src="~@/assets/img/human.svg"></v-img>
                          </div>
                        </div>
                      </div>
                      <div class="text--disabled text-uppercase text-h5 my-2">Créditos personales</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Crédito personal para empleados</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Crédito dejando en garantia tu vehículo</div>
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                        SABER MÁS
                      </v-btn>
                    </v-card-text>
                    <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
                  </div>
                  <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
                </v-col>
                <v-col class="col-12 col-sm-6 col-md-4">
                  <div class="flex-center">
                    <v-card-text>
                      <div class="flex-center">
                        <div class="circle1">
                          <div class="circle2">
                            <v-img src="~@/assets/img/house.svg"/>
                          </div>
                        </div>
                      </div>
                      <div class="text--disabled text-uppercase text-h5 my-2">Créditos hipotecarios</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Quieres comprar una casa o terreno?</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Tienes un terreno y necesitas dinero para construir?</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Quieres cambiar el crédito de quien te vende a tu nombre?</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Quieres una sustitución de hipoteca para mejora de condiciones?</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Necesitas un crédito de liquidez?</div>
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                      SABER MÁS
                      </v-btn>
                    </v-card-text>
                    <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.mdAndUp"></v-divider>
                  </div>
                  <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
                </v-col>
                <v-col class="col-12 col-md-4">
                  <v-divider v-if="this.$vuetify.breakpoint.smOnly" class="mx-4"></v-divider>
                  <div class="flex-center">
                    <v-card-text>
                      <div class="flex-center">
                        <div class="circle1">
                          <div class="circle2">
                            <v-img src="~@/assets/img/car.svg"/>
                          </div>
                        </div>
                      </div>
                      <div class="text--disabled text-uppercase text-h5 my-2">Créditos para automóviles</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Quieres comprar un vehículo nuevo?</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Quieres comprar un vehículo usado?</div>  
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                        SABER MÁS
                      </v-btn>
                    </v-card-text>
                  </div>
                </v-col>
              </v-row>
              <v-row class="text-center">
                <v-col class="col-12 col-md-4">
                  <v-divider v-if="this.$vuetify.breakpoint.smOnly" class="mx-4"></v-divider>
  
                  <div class="flex-center">
                    <v-card-text>
                      <div class="flex-center">
                        <div class="circle1">
                          <div class="circle2">
                            <v-img src="~@/assets/img/company.svg"/>
                          </div>
                        </div>
                      </div>
                      <div class="text--disabled text-uppercase text-h5 my-2">Crédito PYME y empresarial</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Domínios personalizados</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Acessos ilimitados</div>
                    
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                        SABER MÁS
                      </v-btn>
                    </v-card-text>
                  </div>
                </v-col>
                <v-col class="col-12 col-sm-6 col-md-4">
                  <div class="flex-center">
                    <v-card-text>
                      <div class="flex-center">
                        <div class="circle1">
                          <div class="circle2">
                            <v-img src="~@/assets/img/bank.svg"></v-img>
                          </div>
                        </div>
                      </div>
                      <div class="text--disabled text-uppercase text-h5 my-2">Remates bancarios</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Oportunidades Inmobiliarias!</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Información sobre remates bancarios</div>
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                          to ="/remates"
                      >
                        SABER MÁS
                      </v-btn>
                    </v-card-text>
                    <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
                  </div>
                  <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
                </v-col>
                <v-col class="col-12 col-sm-6 col-md-4">
                  <div class="flex-center">
                    <v-card-text>
                      <div class="flex-center">
                        <div class="circle1">
                          <div class="circle2">
                            <v-img src="~@/assets/img/juridico.svg"/>
                          </div>
                        </div>
                      </div>
                      <div class="text--disabled text-uppercase text-h5 my-2">Cobranza y Jurídicos</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Cobranza judicial</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Cobranza extrajudicial</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase blue--text">Asesoría juríidica</div>
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                      SABER MÁS
                      </v-btn>
                    </v-card-text>
                    <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.mdAndUp"></v-divider>
                  </div>
                  <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
                </v-col>
               
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="svg-border-rounded text-light">
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
          />
        </svg> -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="currentColor"
        >
          <path
              d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h3>1</h3>
    </div>
    <div class="carousel-item">
      <h3>2</h3>
    </div>
    <div class="carousel-item">
      <h3>3</h3>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>
  </template>
  
  <style lang="scss">
  $main_color: #283e79;
  
  ul {
    font-size: 13px;
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;
  
    li {
      list-style: none;
      position: relative;
      padding: 0 0 0 20px;
    }
  
    li {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 10px;
        height: 10px;
        background-color: $main_color;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-eeborder-radius: 50%;
      }
    }
  }
  </style>
  
  <style scoped>
  .header {
    background-color: #283e79;
    color: white;
  }
  
  .circle1 {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background-color: #f0f8ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .circle2 {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: #e0effc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .svg-border-rounded svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #f4f7f5;
    z-index: -1;
  }
  
  #pricing {
    z-index: 0;
  }
  
  .content {
    z-index: 1;
  }
  
  svg {
    overflow: hidden;
  }
  
  section {
    position: relative;
  }
  </style>
  
  <script>
  export default {
    data: () => ({
      planos: [
        {
          title: "Básico",
          price: "R$100,00",
          img: "f1.png",
          features: [
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 1",
            },
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 2",
            },
            {
              icon: {
                text: "mdi-cancel",
                color: "red",
              },
              text: "Feature 3",
            },
            {
              icon: {
                text: "mdi-cancel",
                color: "red",
              },
              text: "Feature 4",
            },
          ],
        },
        {
          title: "Padrão",
          price: "R$150,00",
          img: "f2.png",
          features: [
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 1",
              color: "success",
            },
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 2",
            },
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 3",
              color: "success",
            },
            {
              icon: {
                text: "mdi-cancel",
                color: "red",
              },
              text: "Feature 4",
            },
          ],
        },
        {
          title: "Premium",
          price: "R$250,00",
          img: "f3.png",
          features: [
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 1",
              color: "success",
            },
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 2",
            },
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 3",
              color: "success",
            },
            {
              icon: {
                text: "mdi-check",
                color: "success",
              },
              text: "Feature 4",
              color: "success",
            },
          ],
        },
      ],
    }),
    computed: {
      size() {
        const size = {md: "large", xl: "x-large"}[
            this.$vuetify.breakpoint.name
            ];
        return size ? {[size]: true} : {};
      }
    },
  };
  </script>