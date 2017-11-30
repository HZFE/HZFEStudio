<template>
  <section class="home-section member">
    <header>
      <div class="rect-skew_brown">
        <h2>Member</h2>
      </div>
    </header>
    <section class="main">
      
    </section>
    <footer>
      <img src="static/img/Seedling.svg" alt="Seedling" aria-hidden="true">
    </footer>
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
    @include flex-cross-center(flex, column);
    justify-content: space-between;
  }
</style>
