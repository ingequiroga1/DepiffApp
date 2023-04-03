<template>
  <nav class="navbar navbar-expand-lg bg-primary fixed-top">
  <div class="container-fluid">
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" aria-current="page" href="#" @click="moveToSection('hero')">Home</a>
        <a class="nav-link" href="#" @click="moveToSection('nosotros')">Features</a>
        <a class="nav-link" href="#" @click="moveToSection('acerca')">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default{
    methods: {
        moveToSection(id){
            //console.log(id);
            this.$emit('goToSeccion',id)
        }
    }
}
</script>

<style lang="scss">


.navbar-nav a{
    color: #fff;
    font-weight: bold;
    height: 70px;
    line-height: 70px;
    padding: 0 15px;
    font-size: 1em;
    text-transform: uppercase;
    font-family: 'Trebuchet MS', sans-serif;
    -webkit-transition: height .4s ease, line-height .4s ease, margin .4s ease, padding .4s ease;
    -o-transition: height .4s ease, line-height .4s ease, margin .4s ease, padding .4s ease;
    transition: height .4s ease, line-height .4s ease, margin .4s ease, padding .4s ease;
}

.navbar-nav a:hover  {
  background: #ffffff;
  border-color:#ffffff;
  color: #F2921D;
}


</style>