<script>
import { apiUri } from './data/index';
import axios from 'axios'
import HeaderApp from './components/header.vue'
import MainApp from './components/main.vue'
import CardApp from './components/card.vue'


export default {
  name: 'coreApp',
  components: { HeaderApp, MainApp, CardApp },

  methods: {
    getMovie() {
      console.log('ciao')
      axios.get(`${apiUri}&query=${this.termSearch}`)
        .then((res) => {
          this.movie = res.data.results;

        })
    },
    getFilterSearch(termSearch) {
      console.log(termSearch)
      axios.get(`${apiUri}&query=${termSearch}`)
        .then((res) => {
          this.movie = res.data.results;

        })
    }
  }
}




</script>
<template>
  <HeaderApp @get-movie="getFilterSearch"></HeaderApp>
  <MainApp :title="movie.title"></MainApp>
</template>
<style>

</style>