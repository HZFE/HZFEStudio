<template>
  <article class="memeber-card">
    <img :src="member.avatar" :alt="member.name" class="avatar">
    <section class="content">
      <h4>{{ member.name }}</h4>
      <p>{{ member.description }}</p>
    </section>
    <ul class="tags">
      <li>{{ `#${member.tags[0]}` }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    member: Object
  }
}
</script>

<style scoped lang="scss">
  @import './src/style/index.scss';

  .memeber-card {
    border-radius: .8vw;
    @include flex-center;
    padding: $gap-small;
    width: 25%;
    color: $brown;
    margin: $gap-small 0;
    font-weight: bolder;
    position: relative;
    border: 1px solid transparent;
    .content {
      flex: 1;
      min-width: 0;
    }
    ul {
      list-style: none;
      position: absolute;
      right: $gap-small;
      top: $gap-small;
      font-size: 12px;
      background-color: $brown;
      color: $yellow;
      padding: 0 $gap-tiny;
      line-height: 1.5;
      border-radius: 5px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: $gap-small;
      background: $brown;
      box-shadow: 0 0 0 1px $brown;
    }
    h4 {
      font-size: 20px;
      font-weight: bolder;
      color: inherit;
      word-break: break-all;
      margin-bottom: $gap-tiny;
    }
    p {
      font-size: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      min-width: 0;
    }
    &:hover {
      border-color: $brown;
      box-shadow: 0 1px 0 $brown, 0 2px 0 $brown, 0 3px 0 $brown;
      transform: translateY(-3px);
      transition: transform .1s ease-in-out, box-shadow .1s ease-in-out;
      img {
        border-color: $brown;
      }
    }
  }
  @include min-screen(1440px) {
    .memeber-card {
      width: 20%;
    }
  }
  @include min-screen(1920px) {
    .memeber-card {
      width: 16.6666%;
    }
  }
  @include max-screen($media-ipad-rotate) {
      .memeber-card {
        width: 33.3333%;
      }
  }
  @include max-screen($media-ip6p-rotate) {
    .memeber-card {
      flex-direction: column;
      padding: $gap-tiny;
      width: auto;
      p {
        display: none;
      }
      img {
        margin-right: 0;
        margin-bottom: 0;
      }
      h4,
      ul {
        display: none;
      }
    }
  }
  @include max-screen($media-ip6p) {
    .memeber-card {
      // width: 20%;
      padding: $gap-tiny;
      ul {
        display: none;
      }
    }
  }
</style>
