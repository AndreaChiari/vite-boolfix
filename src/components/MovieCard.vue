<script>
import { baseImgUrl } from '../data';
export default {
    name: 'MovieCard',
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        poster: String,
        overview: String
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
            return result
        }
    }



}
</script>
<template>

    <div class="d-flex flex-wrap poster-img-container">
        <img :src="makePosterUrl" alt="" class="img-poster">
        <div class="info-container">
            <h1>Titolo: {{ title }}</h1>
            <h2 v-show="title !== originalTitle">Titolo originale: {{ originalTitle }}</h2>
            <div class="pic-language">
                <img v-if="language === 'it'" src="../img/it.png" alt="it">
                <img v-if="language === 'en'" src="../img/en.png" alt="en">
            </div>
            <div class="d-flex align-items-center" v-if="fixVote === 0">
                <p>Voto:</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="d-flex" v-if="fixVote === 1">
                <p>Voto:</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="d-flex" v-if="fixVote === 2">
                <p>Voto:</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="d-flex" v-if="fixVote === 3">
                <p>Voto:</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="d-flex" v-if="fixVote === 4">
                <p>Voto:</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="d-flex" v-if="fixVote === 5">
                <p>Voto:</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <p class="overview">{{ overview }}</p>
        </div>
    </div>


</template>
<style lang="scss" scoped>
.fa-solid,
.fa-regular {
    font-size: 30px;
    color: yellow;
}

p {
    font-size: 30px;
    line-height: 30px;
}

h1,
h2 {
    font-size: 25px;
    margin-bottom: 10px;
}

.overview {
    font-size: 20px;
    line-height: 21px;
}

.poster-img-container {
    position: relative;
    display: inline-block;
}

.info-container {
    width: 344px;
    height: 515px;
    background-color: black;
    color: white;
    padding-top: 10px;
    padding-left: 10px;
    overflow-y: auto;
    display: none;
    position: absolute;
    top: 0;
    left: 5;
    z-index: 1;
    margin-left: 20px;
    margin-bottom: 20px;
    border-radius: 5px;


    .pic-language {
        img {
            width: 100px;
            height: auto;
            margin-left: 0px;
            margin-bottom: 10px;
        }
    }

}

.img-poster {
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 20px;
    margin-bottom: 20px;

}

.poster-img-container:hover .info-container {
    display: inline;
}
</style>