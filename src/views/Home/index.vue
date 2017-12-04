<template>
  <main class="home">
    <TheFirstScreen/>
    <TheMember/>
    <TheWorks/>
    <TheAboutUs/>
    <TheFooter/>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheFirstScreen from './components/TheFirstScreen.vue'
import TheMember from './components/TheMember.vue'
import TheWorks from './components/TheWorks.vue'
import TheAboutUs from './components/TheAboutUs.vue'
import TheFooter from './components/TheFooter.vue'

@Component({
  components: {
    TheFirstScreen,
    TheMember,
    TheWorks,
    TheAboutUs,
    TheFooter
  }
})
export default class Home extends Vue {
}
</script>

<style scoped>
</style>
