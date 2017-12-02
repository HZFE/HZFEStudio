<template>
  <main class="home">
    <TheFirstScreen/>
    <TheMember/>
    <TheWorks/>
    <TheAboutUs/>
    <TheFooter/>
  </main>
</template>

<script>
import TheFirstScreen from './components/TheFirstScreen.vue'
import TheMember from './components/TheMember.vue'
import TheWorks from './components/TheWorks.vue'
import TheAboutUs from './components/TheAboutUs.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
    TheFirstScreen,
    TheMember,
    TheWorks,
    TheAboutUs,
    TheFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
