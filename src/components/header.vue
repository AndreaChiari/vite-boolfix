<script>
import { apiUri } from '../data/index';
import axios from 'axios'
export default {
    name: 'HeaderApp',
    data() {
        { apiUri }
        return {
            termSearch: " "

        }
    },
    methods: {
        getMovie() {
            console.log('ciao')
            axios.get(`${apiUri}&query=${this.termSearch}`)
                .then((res) => {
                    this.movie = res.data.results;

                })
        }
    },
    changeSearch() {

    },

    created() {
        this.getMovie()
    }
}
</script>
<template>
    <header>
        <input type="text" v-model.trim="termSearch" placeholder="Cerca il tuo film...">
        <button class="button" @click="">cerca</button>
    </header>
</template>


<style scoped lang="scss">
header {
    height: 100px;
    background-color: rgb(196, 21, 21);
}
</style>