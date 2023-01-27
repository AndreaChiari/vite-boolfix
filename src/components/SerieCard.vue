<script>
import { baseImgUrl } from '../data';
export default {
    name: 'SerieCard',
    props: {
        title: String,
        originalTitle: String,
        originalName: String,
        language: String,
        vote: Number,
        poster: String
    },

    data() {
        return {
            en: 'en.png',
            it: 'it.png',

        }

    },
    computed: {
        makePosterUrl() {
            const url = new URL(baseImgUrl + this.poster, import.meta.url);
            // const url = new URL(baseImgUrl + this.poster, import.meta.url);
            return url.href;
        }
    }


}
</script>
<template>

    <!-- <h1>{{ title }}</h1>
    <h2 v-show="originalTitle !== title">{{ originalTitle }}</h2>
    <h2 v-show="originalName">{{ originalName }}</h2>
    <div>
        <img v-if="language === 'it'" src="../img/it.png" alt="it">
        <img v-if="language === 'en'" src="../img/en.png" alt="en">
    </div>
    <p>{{ vote }}</p>
    <div>
        <img :src="makePosterUrl" alt="originalTitle">
    </div> -->

</template>
<style>

</style>
