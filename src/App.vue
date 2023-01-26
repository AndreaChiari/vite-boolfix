<script>
import HeaderApp from './components/header.vue'
import MainApp from './components/main.vue'
import CardApp from './components/card.vue'

export default {
  name: 'coreApp',
  components: { HeaderApp, MainApp, CardApp },

}


</script>
<template>
  <HeaderApp></HeaderApp>
  <MainApp></MainApp>
</template>
<style>

</style>