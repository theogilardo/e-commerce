<template>
  <div class="box">
    <p class="box__size">{{ productSize }}</p>
  </div>
</template>

<script>
export default {
  props: {
    productSize: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>

.box
  background #E6E6E6
  height 4rem
  width 7rem
  display flex
  align-items center
  justify-content center
  margin-left 1rem

  &__size
    color black
    font-weight 400
    font-size 1.4rem
</style>
