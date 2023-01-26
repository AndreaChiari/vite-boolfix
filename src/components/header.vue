<script>
import { apiUri } from '../data/index';
export default {
    name: 'HeaderApp',
    data() {
        { apiUri }
        return {
            termSearch: " ",
            emits: ['get-movie']

        }
    },

}
</script>
<template>
    <header>
        <input type="text" v-model.trim="termSearch" placeholder="Cerca il tuo film...">
        <button class="button" @click="$emit('get-movie', termSearch)">cerca</button>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 100px;
    background-color: rgb(196, 21, 21);
}
</style>