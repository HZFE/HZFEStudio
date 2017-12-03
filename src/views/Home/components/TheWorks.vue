<template>
  <section class="works">
  </section>
</template>

<script>
export default {
  name: 'TheWorks',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style';

  .works {
    position: relative;
    height: 100vh;
    background-color: $green;
    text-align: center;
    &::before {
      content: 'Works';
      @include flex-center;
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 22vw;
      font-weight: bold;
      color: $green-lighten;
      opacity: 0.2;
    }
  }
  header {
    padding: $gap-big 0;
  }
</style>
