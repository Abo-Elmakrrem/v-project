<template>
  <b-container class="caption">
    <div>
      <b-container class="bv-example-row">
        <b-row class="text-center">
          <!-- first card -->
          <b-col>
            <div class="mt-5 cards-comp">
              <img src="../../assets/img/idea.svg" alt=""  class="mt-5"/>
              <hr class="mt-5">
              <h2 class="text-uppercase mt-5">idea</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                alias unde cum voluptas fugit facere libero impedit! Labore
                ullam, nulla perferendis quae, omnis vel adipisci exercitationem
                sint quisquam, placeat ratione!
              </p>
            </div>
          </b-col>
          <!-- first card -->

          <!-- second card -->
          <b-col> 
            <div class="mt-5 cards-comp">
              <img src="../../assets/img/work.svg" alt="" class="mt-5"/>
              <hr class="mt-5">
              <h2 class="text-uppercase mt-5">work</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                alias unde cum voluptas fugit facere libero impedit! Labore
                ullam, nulla perferendis quae, omnis vel adipisci exercitationem
                sint quisquam, placeat ratione!
              </p>
            </div>
          </b-col>
          <!-- second card-->

          <!-- thrd card -->
          <b-col> 
            <div class="mt-5 cards-comp">
              <img src="../../assets/img/deliver.svg" alt="" class="mt-5" />
              <hr class="mt-5">
              <h2 class="text-uppercase mt-5">deliver</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                alias unde cum voluptas fugit facere libero impedit! Labore
                ullam, nulla perferendis quae, omnis vel adipisci exercitationem
                sint quisquam, placeat ratione!
              </p>
            </div>
          </b-col>
          <!-- third card -->
        </b-row>
      </b-container>
    </div>
  </b-container>
</template>
  

<script>
export default {
  name: "services",
  components: {},
};
</script>


<style scoped>



.cards-comp{
  background-color: var(--white);
  height: 53vh;
  width: 90%;
}

hr{
  color: #00c7fc;
  width:15%;
  margin: auto;
  border-top: 5px solid ;
}


</style>

