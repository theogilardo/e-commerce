<template>
  <nuxt-link
    @click.native="findProduct"
    class="recommendation"
    :to="`/product/${product.id}`"
  >
    <div class="recommendation__box">
      <img
        class="recommendation__image"
        :src="getImgUrl(product.image)"
        alt="Shoe"
      />
    </div>
    <h4 class="recommendation__price">{{ product.price }}</h4>
    <p class="recommendation__product">{{ product.name }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    findProduct() {
      this.$store.commit("findProduct", this.product.id);
    }
  }
};
</script>

<style lang="stylus" scoped>

.recommendation
  display flex
  align-items center
  justify-content center
  flex-direction column
  position relative
  text-decoration none
  color inherit

  &::after
    content ''
    position absolute
    top 30%
    left 50%
    transform translate(-50%, -50%)
    width 12rem
    height 12rem
    background #2898B0
    z-index -1
    border-radius 50%

  &__box
    height 15rem
    width 100%
    display flex
    align-items center
    justify-content center
    margin-bottom 4rem

  &__image
    width auto
    height 150px
    object-fit cover

  &__price
    margin-bottom .5em
    align-self flex-start

  &__product
    text-transform uppercase
    align-self flex-start
</style>
