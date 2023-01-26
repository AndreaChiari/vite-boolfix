<script>
import { apiUri } from '../data/index';
export default {
    name: 'HeaderApp',
    data() {
        { apiUri }
        return {
            termSearch: " "

        }
    },
    methods: {
        onTypeChange() {
            console.log()
            axios.get(`${apiUri}${this.termSearch}`)
                .then((res) => {
                    this.movie = res.data.results

                })
        }
    }
}
</script>
<template>
    <header>
        <input type="text" v-model.trim="termSearch" placeholder="Cerca il tuo film...">
        <button class="button">cerca</button>
    </header>
</template>


<style scoped lang="scss">
header {
    height: 100px;
    background-color: rgb(196, 21, 21);
}
</style>