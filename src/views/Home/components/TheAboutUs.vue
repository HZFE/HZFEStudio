<template>
  <section class="home-section about-us">
    <section class="main">
      <article class="animate-container"
               ref="animateContainer">
      </article>
    </section>
    <footer>

    </footer>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Bodymovin from 'bodymovin'

@Component({})
export default class TheAboutUs extends Vue {
  created () {
    this.$nextTick(() => {
      this.initFishAnimate()
    })
  }

  initFishAnimate () {
    /**
     * 鲤鱼打挺(x
     * @author goodhome update(2017/12/3)
     * */
    let animateContainer = this.$refs.animateContainer
    let animateConfig = {
      container: animateContainer,
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      path: 'static/fish.json'
    }
    Bodymovin.loadAnimation(animateConfig)
  }
}
</script>

<style scoped lang="scss">
  @import '~style';

  .about-us {
    position: relative;
    height: 100vh;
    background-color: $blue;
    @include flex-cross-center(flex, column);
    justify-content: space-between;
    &::before {
      content: 'About';
      @include flex-center;
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 22vw;
      font-weight: bold;
      color: $blue-lighten;
      opacity: 0.2;
    }
    .animate-container {
      position: absolute;
      width: 80vw;
      max-width: 500px;
      top: 0;
      left: 50%;
      transform: translate(-50%, -52%);
    }
  }
</style>
