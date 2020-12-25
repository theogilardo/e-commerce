<template>
  <nav>
    <div>
      <p>
        <nuxt-link to="/">
          Menu
        </nuxt-link>
      </p>
      <p>
        Men
      </p>
      <p>
        Women
      </p>
    </div>
    <nuxt-link to="/cart">
      <button class="btn">Your cart size: {{ productCart.length }}</button>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  computed: {
    productCart() {
      if (this.$store.getters.productCart) {
        return this.$store.getters.productCart;
      }
      return 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
a
  text-decoration none
  color black

nav
  width 1100px
  position absolute
  padding-top 2rem
  left 50%
  z-index 1000
  transform translateX(-50%)
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > p
      text-transform uppercase

    & > p:not(:last-child)
      margin-right 5rem

.btn
  padding-right 4rem
  border-radius 25px
  background black
  color white
  border none
  padding 1rem 1.5rem
  font-weight bold
  text-transform uppercase
</style>
