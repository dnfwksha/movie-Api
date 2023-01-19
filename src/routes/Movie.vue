<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
    <Loader
    :size="3"
    :z-index="9"
    fixed/>

  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader
  },
  computed:{
    theMovie(){
      return this.$store.state.movie.theMovie()
    }
  },

  created() {
    console.log(this.$route)
    this.$store.dispatch('movie/searchMovieWithId', {
      // movie/tt123762
      id: this.$route.params.id
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main";

.container {
  padding-top: 40px;
}

.skeletons {
  display: flex;

  .poster {
    flex-shrink: 0;
    width: 500px;
    height: calc(500px * 3 / 2);
    margin-right: 70px;
  }

  .specs {
    flex-grow: 1;
  }

  .skeleton {
    border-radius: 10px;
    background-color: $gray-200;

    &.title {
      width: 80%;
      height: 70px;
    }

    &.spec {
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }

    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;

    }

    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;

    }
  }
}
</style>