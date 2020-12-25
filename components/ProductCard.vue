<template>
  <div class="cart">
    <img :src="getImgUrl" alt="" class="cart__image" />
    <div class="cart__info">
      <h2>{{ product.name }}</h2>
      <h4>{{ product.price }}</h4>
      <p>{{ product.size }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    getImgUrl() {
      return require("@/assets/" + this.product.image);
    }
  }
};
</script>

<style lang="stylus" scoped>

.cart
  display flex
  align-items center
  justify-content space-between
  border-radius 10px
  height 12rem
  margin-bottom 1rem
  padding 1rem 2.5rem

  &__image
    width 15rem
    height auto
    object-fit cover

  &__info
    display flex
    flex-direction column
    align-items flex-start
    justify-content center
    flex 1
    margin-left 2rem
</style>
