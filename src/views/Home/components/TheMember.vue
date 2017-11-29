<template>
  <section class="member">
    <h1 class="name">
      Member
    </h1>
  </section>
</template>

<script>
export default {
  name: 'TheMember',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style';

  .member {
    height: 100vh;
    background-color: $yellow;
    @include flex-center;

    .name {
      font-size: 40px;
      color: $brown;
    }
  }
</style>
