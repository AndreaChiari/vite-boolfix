<script>
import { apiUri } from './data/index';
import axios from 'axios'
import HeaderApp from './components/header.vue'
import MainApp from './components/main.vue'
import CardApp from './components/card.vue'


export default {
  name: 'coreApp',
  components: { HeaderApp, MainApp, CardApp },
  data() {
    return {
      movies: [],
    }
  },

  methods: {

    getFilterSearch(termSearch) {
      console.log(termSearch)
      axios.get(`${apiUri}&query=${termSearch}`)
        .then((res) => {
          this.movies = res.data.results;
          console.log(this.movies)

        })
    }
  }
}




</script>
<template>
  <HeaderApp @get-movie="getFilterSearch"></HeaderApp>
  <MainApp v-for="movie in movies" :originalTitle="movie.original_title" :title="movie.title"
    :language="movie.original_language" :vote="movie.vote_average" :key="movie.title">
  </MainApp>
</template>
<style>

</style>