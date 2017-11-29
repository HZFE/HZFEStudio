<template>
  <section class="works">
    <h1 class="name">
      Works
    </h1>
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
    height: 100vh;
    background-color: $green;
    @include flex-center;

    .name {
      font-size: 40px;
      color: $green-lighten;
    }
  }
</style>
