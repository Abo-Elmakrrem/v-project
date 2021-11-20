<template>
  <section>
    <Caption />
    <Cards />
  </section>
</template>


<script>
import Caption from "@/components/services/captionComp.vue";
import Cards from "@/components/services/cardsComp.vue";

export default {
  name: "services",
  components: {
    Caption,
    Cards,
  },
};
</script>
<style scoped>
section{
  background-color: var(--light-gray);
  background-size: cover;
  height: 90vh;
  
}
</style>