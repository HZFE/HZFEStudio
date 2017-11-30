<template>
  <section class="works">
    <header>
      <div class="rect_green">
        <h2>Works</h2>
      </div>  
    </header>
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
    text-align: center;
  }
  header {
    padding: $gap-big 0;
  }
</style>
