<template>
  <Header />
  <RouterView/>

</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components:{
    Header
  }
}
</script>

<style lang="scss">
@import "./scss/main";
</style>