<template>
  <div class="container">
    <div class="inner">
      <div class="message">
        {{ message }}
      </div>
      <div class="movies">
        <MovieItem
            v-for="movie in movies"
            :key="movie.imdbID"
            :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";

export default {
  components: {
    MovieItem
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies
    },
    message() {
      return this.$store.state.movie.message
    }
  }
  // data(){
  //   return{
  //     movies:[]
  //
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.container{
  .movies{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>