<script>
import { apiUri } from './data/index';

// import axios
import axios from 'axios'

// import components
import HeaderApp from './components/header.vue'
import CinemaCard from './components/CinemaCard.vue'


export default {
  name: 'coreApp',
  components: { HeaderApp, CinemaCard },
  data() {
    return {
      movies: [],
    }
  },

  methods: {

    // imposto un filtro che mi permette di filtrare dall'API serie tv e film

    SearchFilter(termSearch) {
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
  <HeaderApp @get-movie="SearchFilter"></HeaderApp>
  <main>
    <CinemaCard v-for="movie in movies" :originalTitle="movie.original_title" :title="movie.title"
      :language="movie.original_language" :vote="movie.vote_average" :originalName="movie.original_name"
      :poster="movie.poster_path" :key="movie.title"></CinemaCard>
  </main>

</template>
<style>

</style>