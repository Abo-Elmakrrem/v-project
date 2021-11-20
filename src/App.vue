<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="light">
        <b-container>
          <img src="../src/assets/img/logo.png" alt="" />

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav class="nav-i">
            <b-navbar-nav class="ms-auto">
              <router-link to="/" class="ps-3 text-decoration-none"
                >Home</router-link
              >
              <router-link to="/portofolio" class="ps-3 text-decoration-none"
                >portofolio</router-link
              >
              <router-link to="/services" class="ps-3 text-decoration-none"
                >Services</router-link
              >
              <router-link to="/about" class="ps-3 text-decoration-none"
                >clients</router-link
              >
              <router-link to="/Php62" class="ps-3 text-decoration-none"
                >sales</router-link
              >
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>

    <!-- view -->

    <router-view />
      <footer class="">
      <b-container class="bv-example-row ">
        <b-row class="text-center">
          <b-col class="mt-5"><h5>All Rights Reseved</h5></b-col>
          <b-col cols="5"></b-col>
          <b-col class="mt-5">
            <div class="row">
              <div class="col-sm-4">
                <font-awesome-icon icon="facebook"/>
              </div>
              <div class="col-sm-4">
                <font-awesome-icon icon="user-secret"/>
              </div>
              <div class="col-sm-4">
                <font-awesome-icon icon="user-secret"/>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<style>
/* nav */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* footer */

footer{
  background-color: var(--main-color);
  height: 15vh;
}



</style>
