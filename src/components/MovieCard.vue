<script>
import { baseImgUrl } from '../data';
export default {
    name: 'MovieCard',
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
            return url.href;
        },
        fixVote() {
            const roundNumber = Math.round(this.vote) / 2;
            const result = Math.round(roundNumber)
            console.log(result)
            return result
        }
    }



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
    <p>{{ fixVote }}</p>
    <div class="d-flex" v-if="fixVote === 0">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <div class="d-flex" v-if="fixVote === 1">
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <div class="d-flex" v-if="fixVote === 2">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <div class="d-flex" v-if="fixVote === 3">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <div class="d-flex" v-if="fixVote === 4">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <div class="d-flex" v-if="fixVote === 5">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>
    <div>
        <img :src="makePosterUrl" alt="originalTitle">
    </div>

</template>
<style>

</style>
