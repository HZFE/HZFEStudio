<template>
  <section class="first-screen">
    <div class="svg_moon">
      <img src="static/img/Moon.svg" alt="Moon" aria-hidden="true">
    </div>
    <h1 class="name logo">
      <span>HZFE</span>Studio
    </h1>
    <div class="svg_montain"></div>
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
      font-size: 50px;
      line-height: 1;
      padding: $gap-normal;

      span {
        font-weight: bolder;
      }
    }
  }
  [class^=svg] {
    flex: 1;
    @include flex-center;
    &.svg_fullsize {
      width: 100vw;
      img {
        height: 100%;
        width: 800px;
        max-width: 100%;
      }
    }
  }
  .svg_montain {
    width: 100vw;
    background: url('~static/img/Montain.svg') center bottom no-repeat;
    background-size: contain;
  }
  @include minmax-screen($media-ip5-rotate, 1000px) {
    [class^=svg] {
      &.svg_fullsize {
        img {
          height: 100%;
          width: 60%;
        }
      }
    }
  }
</style>
