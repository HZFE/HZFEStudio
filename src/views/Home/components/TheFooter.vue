<template>
  <section class="footer">
    <div class="social">
    </div>
    <div class="copyright">© 2017 HZFEStudio 已成立{{ establishedDays }}天</div>
  </section>
</template>

<script>
export default {
  get establishedDays () {
    const birthday = +new Date('2016-09-14')
    const nowTime = +new Date()
    const day2Msec = 24 * 60 * 60 * 1000

    return Math.round((nowTime - birthday) / day2Msec)
  }
}
</script> 

<style scoped lang="scss">
  @import './src/style/index.scss';

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
