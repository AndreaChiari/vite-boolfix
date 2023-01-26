<script>
export default {
    name: 'MainApp',
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number

    },
    data() {
        return {

            en: 'en.png',
            it: 'it.png'

        }
    }
}
</script>
<template>
    <h1>{{ title }}</h1>
    <h2>{{ originalTitle }}</h2>
    <div>
        <img v-if="language === 'it'" src="../img/it.png" alt="">
        <img v-if="language === 'en'" src="../img/en.png" alt="">
    </div>
    <p>{{ vote }} </p>
</template>
<style>

</style>