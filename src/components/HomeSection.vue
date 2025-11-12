<template>
  <section id="hero">
    <div class="hero-section">
      <v-row class="hero-content" align="center" justify="center">
        <v-col cols="10" md="6" xl="8">
          <h2 class="main-text font-weight-bold  mb-4 text-white">Protegemos lo que <br> más valoras: tu <br> hogar, tu inversión <br> y tu tranquilidad </h2>
          <h3 class="text-white">
            Expertos en soluciones inmobiliarias y de seguros <br>personalizados.
          </h3>
          <v-btn color="primary" rounded tonal large dark @click="$vuetify.goTo('#features')" class="mt-5">
            Ver propiedades
          </v-btn>
           <v-btn color="#ffffff" rounded tonal large  @click="$vuetify.goTo('#features')" class="mt-5 mx-4">
            Cotizar seguro
          </v-btn>
        </v-col>
      </v-row>
    </div>



    <!-- <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Seguros",
          text: "",
        },
        // {
        //   img: require("@/assets/img/icon1.png"),
        //   title: "Afores",
        //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        // },
        // {
        //   img: require("@/assets/img/icon3.png"),
        //   title: "Inmuebles",
        //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        // },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
      console.log(event);
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
    enviarSeguros() {
      this.$router.push('/seguros')
    }
  },
};
</script>

<style lang="scss">


.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }

        30% {
          transform: translateX(-5px);
        }

        50% {
          transform: translateX(5px);
        }

        70% {
          transform: translateX(-2px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}

.fazul {
  color: #2b4689;
}

section {
  position: relative;
}

.hero-section {
  background-image: url('@/assets/img/fondohero2.png');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    background-attachment: scroll; 
    background-position: center top; 
  }

  @media (max-width: 768px) {
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: 60% center; 
    height: 100vh; 
    padding: 3rem 1rem;
    text-align: center;

    .hero-content {
      text-align: center;

      .v-btn {
        display: block;
        margin: 0.5rem auto;
      }
    }
  }
}


/* .hero-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.2);
} */

.main-text{
  font-size: 3rem !important;
    line-height: 3.125rem;
    letter-spacing: normal !important;
}

</style>