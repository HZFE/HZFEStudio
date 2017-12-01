<template>
  <article class="memeber-card">
    <img :src="member.avatar" :alt="member.name" class="avatar">
    <section class="content">
      <h4>{{ member.name }}</h4>
      <p>{{ member.description }}</p>
    </section>
    <ul class="tags">
      <li v-for="tag in member.tags">{{ `#${tag}` }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'MemberCard',
  props: ['member'],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style';

  .memeber-card {
    border-radius: .8vw;
    @include flex-center;
    padding: $gap-small;
    width: 20%;
    color: $brown;
    margin: $gap-small;
    font-weight: bolder;
    position: relative;
    border: 1px solid transparent;
    .content {
      flex: 1;
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
      margin-bottom: $gap-tiny;
    }
    p {
      font-size: 12px;
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
</style>
