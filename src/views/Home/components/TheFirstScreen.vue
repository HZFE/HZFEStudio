<template>
  <section class="first-screen">
    <div class="svg_moon">
      <img src="static/img/Moon.svg" alt="Moon" aria-hidden="true">
    </div>
    <h1 class="name logo">
      <span>HZFE</span>Studio
    </h1>
    <div class="svg_montain svg_fullsize">
      <img src="static/img/Montain.svg" alt="Montain" aria-hidden="true">
    </div>
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
    @include flex-center;
    &.svg_fullsize img {
      height: 100%;
      max-width: 100%;
      flex: 1
    }
  }
</style>
