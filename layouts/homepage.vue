<template>
  <div id="container">
    <the-navbar />
    <Nuxt />
    <h1 class="background-text">
      Original <br />
      Version
    </h1>
    <img class="background-shape" src="../assets/shape.svg" alt="Shoe" />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";
export default {
  components: {
    TheNavbar
  }
};
</script>

<style lang="stylus">

.background-text
  text-transform uppercase
  position absolute
  font-size 9rem
  opacity .5
  z-index 10
  top 20%
  left 50%
  color #E8E8E8
  // width 100%


.background-shape
  position absolute
  z-index -1
  top 35%
  left 0
  width 100%

html
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

*,
*::before,
*::after
  box-sizing: border-box;
  margin: 0;
  padding 0

h1
  font-size: 4rem;

h2
  font-size: 3.2rem;

h3
  font-size: 2.4rem;

h4
  font-size: 2em;

p
  font-size: 1.2rem;

#container
  /* max-width: 1366px; */
  // max-width: 1100px;
  // border: 1px solid red;
  width 100%
  margin: 0 auto;
</style>
