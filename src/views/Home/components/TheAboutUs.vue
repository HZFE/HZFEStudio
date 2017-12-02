<template>
  <section class="home-section about-us">
    <header>
      <div class="rect-skew_blue">
        <h2>About</h2>
      </div>
    </header>
    <section class="main">
    
    </section>
    <footer>
      
    </footer>
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
    @include flex-cross-center(flex, column);
    justify-content: space-between;
  }
</style>
