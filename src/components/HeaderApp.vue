<script>
export default {
    name: 'HeaderApp',
    data() {
        return {
            termSearch: " ",
            emits: ['get-movie', 'getting-movie'],
            isAddClass: true

        }
    },


}
</script>

<!-- Input + button -->

<template>
    <div class="standard-container">
        <header class="container-fluid d-flex justify-content-between align-items-center">
            <h1 class="text-danger">BOOLFLIX</h1>
            <div>
                <input type="text" @keyup.enter="$emit('get-movie', termSearch)" v-model.trim="termSearch"
                    placeholder="Cerca il tuo film...">
                <button class="button" @click="$emit('getting-movie', termSearch)">cerca</button>
            </div>
        </header>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/style.scss' as *;

.standard-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background-color: black
}

header {
    @include standard-container;
    height: 100px;
}

input {
    padding: 5px 10px;
}

button {
    background-color: red;
    color: white;
    padding: 5px 10px;
}
</style>