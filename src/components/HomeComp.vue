<template>
  <section class="slider text-center position-relative">
    <b-container class="position-absolute top-50 start-50 translate-middle text-uppercase "> 
        <h3 class="mb-4 slider-text slider-h3"> design  | development | photography</h3>
        <h1 class="mb-4 slider-text ">creativity have a new level</h1>
        <div class="">
          <b-button variant="outline-secondary home-button me-3 text-uppercase">preview</b-button>
          <b-button variant="outline-secondary home-button text-uppercase">get theme</b-button>
        </div>
        

    </b-container>
  </section>
</template>

<script>
export default {
  name: "HomeComp",
};
</script>
<style scoped>
    .slider{
        background-image: url("../assets/img/header.jpg") ;
        background-color: var(--second-color);
        background-blend-mode: multiply;
        height: 91vh;
    }

    div .home-button{
       color : var(--white);
       border: solid 2px ;
    }

    div .home-button:hover{
      background-color: var(--main-color);
    }

  .slider .slider-text{
    color: var(--white);
  }

  .slider .slider-h3{
    font-size: calc(var(--default-font-size));
  }


</style>