<template>
  <section class="first-screen">
    <h1 class="name">
      HZFE<span>Studio</span>
    </h1>
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
    @include flex-center;

    .name {
      color: $white;
      font-size: 40px;
      line-height: 56px;

      span {
        font-weight: lighter;
      }
    }
  }
</style>
