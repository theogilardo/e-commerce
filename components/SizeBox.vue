<template>
  <button @click="selectSize" :class="{ active: isActive }" class="box">
    <p class="box__size">{{ productSize }}</p>
  </button>
</template>

<script>
export default {
  props: {
    productSize: {
      type: Number,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.productSize === this.productSizeSelected;
    },
    productSizeSelected() {
      return this.$store.getters.productSizeSelected;
    }
  },
  methods: {
    selectSize() {
      this.$store.commit("selectProductSize", this.productSize);
    }
  }
};
</script>

<style lang="stylus" scoped>

.box
  border none
  background #E6E6E6
  color black
  height 4rem
  width 7rem
  display flex
  align-items center
  justify-content center
  margin-left 1rem
  cursor pointer

  &.active
    background black
    color #E6E6E6

  &__size
    color inherit
    font-weight 400
    font-size 1.4rem
</style>
