<template class="tex-center">
  <b-container class="bv-example-row mt-5">
    <!-- our clients -->
    <b-row class="text-center text-uppercase client-h3">
      <b-col cols="12">
        <h3 class="mt-5">our clients are</h3>
      </b-col>
    </b-row>
    <!-- our clients -->

    <!-- clients paragaraph -->
    <b-row class="text-center text-uppercase mt-5">
      <b-col cols="12">
        <p class="client-p mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          incidunt nam culpa natus harum eaque tempora non possimus? Amet
          repellat in numquam sint, neque veniam omnis repellendus dolorem odit
          pariatur.
        </p>
      </b-col>
    </b-row>
    <!-- clients paragaraph -->

    <!-- image sections -->
    <b-row class="mt-5 py-5">
      <b-col>
        <img src="../assets/img/stephenson_web_design.svg" alt=""  class="mt-5"/>
      </b-col>
      <b-col>
        <img src="../assets/img/john_doe_design.svg" alt="" class="mt-5"/>
      </b-col>
      <b-col>
        <img src="../assets/img/john_stephenson.svg" alt="" class="mt-5"/>
      </b-col>
      <b-col>
        <img src="../assets/img/stephenson_william.svg" alt="" class="mt-5"/>
      </b-col>
    </b-row>
    <!-- image sections -->
  </b-container>
</template>

<script>
export default {
  name: "portofolioComponents",
};
</script>
<style scoped>
.client-h3 {
  text-decoration: var(--main-color);
  font-weight: bold;
}
</style>