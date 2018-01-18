<template>
  <section class="footer">
    <div class="social">
    </div>
    <div class="copyright">© {{ year }} HZFEStudio 已成立{{ establishedDays }}天</div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class TheFooter extends Vue {
  get establishedDays () {
    const birthday = +new Date('2016-09-14')
    const nowTime = +new Date()
    const day2Msec = 24 * 60 * 60 * 1000

    return Math.round((nowTime - birthday) / day2Msec)
  }
  get year () {
    const yearNow = new Date().getFullYear()
    return yearNow
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
