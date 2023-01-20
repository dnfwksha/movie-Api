<template>
<div class="about">
  <div class="name">
    juhwan
  </div>
  <div>dnf@gmail.com</div>
  <div>https://github.com</div>
  <div>010-2255-1122</div>

</div>
</template>

<script>
export default {
  computed:{
    name(){
      return this.$store.state.about.name
    },
    email(){
      return this.$store.state.about.email
    },
    git(){
      return this.$store.state.about.git
    },
    phone(){
      return this.$store.state.about.phone
    }

  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.about {
  text-align: center;
}
.name{
  font-size: 40px;
  font-family: "Oswald", sans-serif;
  margin-bottom: 20px;
}
</style>