<template>
  <section class="home-section about-us">
    <!--<header>
      <div class="rect-skew_blue">
        <h2>About</h2>
      </div>
    </header>-->
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
        path: 'src/fish.json'
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
    .animate-container {
      position: absolute;
      top: -182px;
      left: 50%;
      width: 420px;
      height: auto;
      transform: translateX(-50%);
    }
  }
</style>
