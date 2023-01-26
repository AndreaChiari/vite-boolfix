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
      movie: [],
    }
  },

  methods: {

    getFilterSearch(termSearch) {
      console.log(termSearch)
      axios.get(`${apiUri}&query=${termSearch}`)
        .then((res) => {
          this.movie = res.data.results;
          console.log(this.movie)

        })
    }
  }
}




</script>
<template>
  <HeaderApp @get-movie="getFilterSearch"></HeaderApp>
  <MainApp :title="this.movie.original_title"></MainApp>
</template>
<style>

</style>