<script>
import { baseImgUrl } from '../data/index';
export default {
    name: 'CinemaCard',
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
            imgPoster: baseImgUrl
        }

    },


}
</script>
<template>

    <h1>{{ title }}</h1>
    <h2 v-show="originalTitle !== title">{{ originalTitle }}</h2>
    <h2 v-show="originalName">{{ originalName }}</h2>
    <div>
        <img v-if="language === 'it'" src="../img/it.png" alt="it">
        <img v-if="language === 'en'" src="../img/en.png" alt="en">
    </div>
    <p>{{ vote }}</p>
    <div>
        <img :src="imgPoster + poster" alt="originalTitle">
    </div>

</template>
<style>

</style>
