<template>
  <div v-if="productSelected" class="container">
    <div
      :style="{ background: productSelected.style.background }"
      class="container__background"
    ></div>
    <img
      class="container__image"
      :src="getImgUrl(productSelected.image)"
      alt="Shoe"
    />
    <div class="recommendation">
      <p
        :style="{ color: productSelected.style.color }"
        class="recommendation__name"
      >
        {{ productSelected.name }}
      </p>
      <h4 class="recommendation__price">{{ productSelected.price }}€</h4>
      <h3 class="recommendation__size">Size</h3>
      <div class="recommendation__sizes">
        <size-box
          v-for="size in productSelected.sizes"
          :productSize="size"
          :key="size.id"
        ></size-box>
      </div>
      <div @click="addToCart" class="btn">+ Add to card</div>
    </div>
  </div>
</template>

<script>
import SizeBox from "@/components/SizeBox.vue";

export default {
  components: {
    SizeBox
  },
  computed: {
    productSelected() {
      return this.$store.getters.productSelected;
    },
    selectProductSize() {
      return this.$store.getters.selectProductSize;
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic);
    },
    addToCart() {
      // if (this.productSelected && this.selectProductSize) {
      this.$store.commit("addToCard");
      // } else {
      // alert("Please select a size");
      // }
    }
  },
  layout: "product"
};
</script>

<style lang="stylus" scoped>

.container
  position relative

  &__background
    min-height 100vh
    width 35%
    position fixed
    top 0
    left 0
    z-index -1

  &__image
    width auto
    height 400px
    object-fit cover
    position fixed
    top 50%
    left 10%
    transform translateY(-50%) scaleX(-1);

.recommendation
  width 100%
  text-align right
  min-height 100vh
  display flex
  flex-direction column
  align-items flex-end

  &__name
    font-size 12rem
    font-weight bold
    margin 10rem 0 1.5rem 0

  &__price
    font-size 4.5rem
    margin-bottom 2rem
    font-weight 300

  &__sizes
    display flex
    align-items center
    justify-content center
    margin-top 3rem
    width 40rem

.btn
  margin-top 7rem
  font-size 1.2rem
  text-transform uppercase
  border none
  color white
  background black
  padding 1.5rem 1rem
</style>
