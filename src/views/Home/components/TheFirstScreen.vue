<template>
  <section class="first-screen">
    <img class="svg_moon" src="static/img/Moon.svg" alt="Moon" aria-hidden="true">
    <h1 class="name logo">
      <span>HZFE</span>Studio
    </h1>
    <img class="svg_montain svg_fullsize" src="static/img/Montain.svg" alt="Montain" aria-hidden="true">
  </section>
</template>

<script>
export default {
  name: 'TheFirstScreen',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style';

  .first-screen {
    height: 100vh;
    background-color: $blue;
    background-image: $blue-gradient;
    @include flex-center(flex, column);
    justify-content: space-between;

    .name {
      color: $white;
      font-size: 40px;
      line-height: 56px;

      span {
        font-weight: bolder;
      }
    }
  }
  [class^=svg] {
    flex: 1;
    &.svg_fullsize {
      height: 100%;
      width: 100%;
    }
  }
</style>
