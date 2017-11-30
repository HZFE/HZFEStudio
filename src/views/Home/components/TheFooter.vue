<template>
  <section class="footer">
    <div class="social">
    </div>
    <div class="copyright">
        © 2017 HZFEStudio 
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style';

  .footer {
    background-color: $blue-ink;
    @include flex-cross-center;
    justify-content: space-between;

    padding: $gap-normal $gap-big;
    color: rgba(255,255,255,.4);
    font-size: 14px;
  }
  .social {
      a {
          display: inline-block;
          width: 40px;
          height: 40px;
      }
      img {
          width: 100%;
          height: auto;
          fill: currentColor;
      }
  }
</style>
