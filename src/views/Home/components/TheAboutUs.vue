<template>
  <section class="about-us">
    <h1 class="name">
      About us
    </h1>
  </section>
</template>

<script>
export default {
  name: 'TheAboutUs',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style';

  .about-us {
    height: 100vh;
    background-color: $blue;
    @include flex-center;

    .name {
      font-size: 40px;
      color: $blue-lighten;
    }
  }
</style>
