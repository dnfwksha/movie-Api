<template>
  <Header/>
  <RouterView/>
  <Footer/>

</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>