<template>
  <main class="home">
    <TheFirstScreen/>
    <TheMember/>
    <TheWorks/>
    <TheAbout/>
    <TheFooter/>
  </main>
</template>

<script>
import TheFirstScreen from './components/TheFirstScreen.vue'
import TheMember from './components/TheMember.vue'
import TheWorks from './components/TheWorks.vue'
import TheAbout from './components/TheAbout.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheFirstScreen,
    TheMember,
    TheWorks,
    TheAbout,
    TheFooter
  }
}
</script>

<style scoped>
</style>
