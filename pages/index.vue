<template>
  <div class="wrapper">
    <main class="container">
      <h1 class="container__title">
        Nike <br />
        Airmax
      </h1>
      <p class="container__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est
        magni nemo minus quae optio iste atque. Hic soluta ipsam dolor iure,
        nostrum tenetur itaque natus deserunt aut expedita, distinctio dolorem
        modi eos, voluptatibus aspernatur vel repellat velit eum cupiditate!
      </p>
      <button class="btn">Check</button>
    </main>
    <h2>Products Recommended</h2>
    <section class="recommendations">
      <shoe-product
        v-for="product in products"
        :key="product.id"
        :data="product"
      />
    </section>
    <div class="background-hero">
      <img
        class="background-hero__image"
        src="../assets/shoe1.png"
        alt="Shoe"
      />
    </div>
  </div>
</template>

<script>
import ShoeProduct from "../components/ShoeProduct";

export default {
  name: "Homepage",
  components: {
    ShoeProduct
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style lang="stylus" scoped>

.wrapper
  width 100%
  min-height 100vh
  position relative

.background-hero
  position absolute
  top 30%
  left 45%

  &::before
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 100%
    height 100%
    content ""
    z-index 100
    width 35rem
    height 35rem
    border-radius 50%
    background #9AC4DE
    z-index 1

  &__image
    position relative
    width 70%
    transform translateX(90px)
    z-index 5

.container
  // border 1px solid blue
  width 40%
  min-height 100vh
  display flex
  justify-content center
  flex-direction column

  &__title
    color #004574
    font-size 13rem
    margin-bottom 2rem

  &__text
    color #5A5A5A
    margin-bottom 4rem
    padding-right 15rem

.btn
  width max-content
  padding-right 4rem
  border-radius 25px
  background white
  color black
  border 1px solid black
  padding 1rem 1.5rem
  font-weight bold
  text-transform uppercase

.recommendations
  display flex
  align-items center
  justify-content space-around
  padding 12rem 0

// .recommendation
//   display flex
//   align-items center
//   justify-content center
//   flex-direction column
//   position relative

//   &::after
//     content ''
//     position absolute
//     top 30%
//     left 50%
//     transform translate(-50%, -50%)
//     width 10rem
//     height 10rem
//     background black
//     z-index -1
//     border-radius 50%

//   &__box
//     height 15rem
//     width 100%
//     display flex
//     align-items center
//     justify-content center
//     margin-bottom 4rem

//   &__image
//     width auto
//     height 150px
//     object-fit cover

//   &__price
//     margin-bottom .5em
//     align-self flex-start

//   &__product
//     text-transform uppercase
//     align-self flex-start
</style>
