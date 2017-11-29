<template>
  <main class="home">
    <TheFirstScreen/>
    <TheMember/>
    <TheWorks/>
    <TheAboutUs/>
  </main>
</template>

<script>
import TheFirstScreen from './components/TheFirstScreen.vue'
import TheMember from './components/TheMember.vue'
import TheWorks from './components/TheWorks.vue'
import TheAboutUs from './components/TheAboutUs.vue'

export default {
  name: 'Home',
  components: {
    TheFirstScreen,
    TheMember,
    TheWorks,
    TheAboutUs
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
