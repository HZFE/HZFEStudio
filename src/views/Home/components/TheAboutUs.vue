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

<script>
import Bodymovin from 'bodymovin'
export default {
  name: 'TheAboutUs',
  data () {
    return {
    }
  },
  methods: {
    init_fishAnimate () {
      /**
       * 鲤鱼打挺(x
       * @author goodhome update(2017/12/3)
       * */
      let animateContainer = this.$refs.animateContainer
      let animateConfig = {
        container: animateContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/static/fish.json'
      }
      Bodymovin.loadAnimation(animateConfig)
    }
  },
  created () {
    this.$nextTick(() => {
      this.init_fishAnimate()
    })
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
      width: 35vw;
      top: 0;
      left: 50%;
      transform: translate(-50%, -52%);
    }
  }
</style>
