<script>
export default {
    name: 'MainApp',
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number

    }
}
</script>
<template>
    <h1>{{ title }}</h1>
    <h2>{{ originalTitle }}</h2>
    <p>{{ language }}</p>
    <p>{{ vote }} </p>
</template>
<style>

</style>