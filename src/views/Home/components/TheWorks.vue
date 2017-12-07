<template>
  <section class="works">
    <header>
      <div class="rect-skew_green">
        <h2>Works</h2>
      </div>
    </header>
    <nav>
      <div class="cover" v-for="(url, name) in worksList">
        <a :href="url" target="_blank"><span>{{ name.toUpperCase() }}</span></a>
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class TheWorks extends Vue {
  worksList = {
    'hzfe': 'https://github.com/HZFE/hzfe',
    'memes-singleDog': 'https://github.com/merrynode/memes-singleDog',
    'hzfeTelegramBot': 'https://github.com/HZFE/hzfeTelegramBot',
    'everyone': 'https://github.com/Yiiu/everyone',
    'hzfe-questions-and-answers': 'https://github.com/Akiq2016/hzfe-questions-and-answers',
    'php-aplayer': 'https://github.com/Daryl-L/php-aplayer',
    'bohu-jekyll-theme': 'https://github.com/LLawlight/bohu-jekyll-theme',
    'vue-slider-component': 'https://github.com/NightCatSama/vue-slider-component',
    'vue-cropper': 'https://github.com/xyxiao001/vue-cropper',
    'VueMusic-PC': 'https://github.com/Reusjs/VueMusic-PC'
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
      // content: 'Works';
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
  nav {
    @include flex-center;
    flex-wrap: wrap;
    align-items: stretch;
    // justify-content: flex-start;
    width: 90%;
    height: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: 900;
    .cover {
      // min-width: 200px;
      text-align: center;
      flex: 0 0;
      padding: 5px;
    }
    a {
      background: $green-lighten;
      display: block;
      height: 100%;
      position: relative;
      padding: $gap-small;
      text-decoration: none;
      outline: 2px dashed $green;
      outline-offset: -8px;
      &:hover {
        outline-style: solid;
      }
    }
    span {
      position: relative;
      display: block;
      top: 50%;
      transform: translateY(-50%);
      color: $green;
      padding: $gap-small;
      white-space: nowrap;
    }
  }
  @include max-screen($media-ip6p-rotate) {
    header {
      padding: $gap-small 0;
    }
    nav {
      font-size: 12px;
      font-weight: 300;
      .cover {
        padding: 2px;
      }
      span {
        padding: $gap-tiny;
      }
      a {
        outline-width: 1px;
        outline-offset: -4px;
      }
    }
  }
</style>
