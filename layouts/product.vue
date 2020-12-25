<template>
  <div id="container">
    <the-navbar />
    <Nuxt />
    <!-- <img src="@/assets/shape-bubbles.svg" alt="" class="background-shape" /> -->
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

.background-shape
  position absolute
  left: 90%;
  top: 65%;
  z-index 5
  width 26rem

html
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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

button:focus
  outline 0

#container
  /* max-width: 1366px; */
  max-width: 1100px;
  // border: 1px solid red;
  margin: 0 auto;
</style>
