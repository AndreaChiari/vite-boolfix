<script>
import { apiUri } from './data/index';
import { myKey } from './data/index'

// import axios
import axios from 'axios'

// import components
import HeaderApp from './components/Header.vue'
import MovieCard from './components/MovieCard.vue'
import SerieCard from './components/SerieCard.vue'


export default {
  name: 'coreApp',
  components: { HeaderApp, MovieCard, SerieCard },
  data() {
    return {
      movies: [],
      series: []
    }
  },

  methods: {

    // imposto un filtro che mi permette di filtrare dall'API i film e le serie TV



    cinemaFilter(termSearch) {

      axios.get(`${apiUri}/search/movie?api_key=${myKey}&query=${termSearch}`)
        .then((res) => {
          this.movies = res.data.results;
          console.log(this.movies)

          axios.get(`${apiUri}/search/tv?api_key=${myKey}&query=${termSearch}`)
            .then((res) => {
              this.series = res.data.results;
              console.log(this.series)

            })

        })
    },
  },
}



</script>
<template>
  <HeaderApp @get-movie="cinemaFilter"></HeaderApp>
  <div>
    <main>
      <h1 v-show="!originalTitle">Film</h1>
      <div class="d-flex flex-wrap">
        <MovieCard v-for="movie in movies" :originalTitle="movie.original_title" :title="movie.title"
          :language="movie.original_language" :vote="movie.vote_average" :originalName="movie.original_name"
          :poster="movie.poster_path" :key="movie.title"></MovieCard>
      </div>
      <h1 v-show="!originalTitle">Serie TV</h1>
      <div class="d-flex flex-wrap">
        <SerieCard v-for="serie in series" :originalTitle="serie.original_title" :title="serie.title"
          :language="serie.original_language" :vote="serie.vote_average" :originalName="serie.original_name"
          :poster="serie.poster_path" :key="serie.title"></SerieCard>
      </div>
    </main>
  </div>



</template>


<style scoped lang="scss">
@use './assets/style.scss' as *;

h1 {
  color: white;
  margin-left: 15px;
}

div {
  background-color: grey;

  main {
    padding-top: 150px;
    @include standard-container;
    min-height: 100vh;

  }
}
</style>


