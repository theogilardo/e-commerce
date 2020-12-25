<template>
  <div v-if="productCart" class="container">
    <!-- <div class="container__products"> -->

    <!-- </div> -->
    <product-card
      v-for="product in productCart"
      :key="product.id"
      :product="product"
      :style="{ background: product.style.background }"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  components: {
    ProductCard
  },
  computed: {
    productCart() {
      return this.$store.getters.productCart;
    }
  }
};
</script>

<style lang="stylus" scoped>

.container
  max-width 700px
  margin 0 auto
  padding-top 10rem
  // min-height 100vh
</style>
