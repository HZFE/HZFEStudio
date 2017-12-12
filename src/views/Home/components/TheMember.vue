<template>
  <section class="home-section member">
    <header>
      <div class="rect-skew_brown">
        <h2>Member</h2>
      </div>
    </header>
    <section class="main" v-if="members">
      <MemberCard v-for="(member, index) in members" :key="index" :member="member"></MemberCard>
    </section>
    <footer>
      <img src="static/img/Seedling.svg" alt="Seedling" aria-hidden="true">
    </footer>
    <section class="detail" v-if="showDetail && member">
      <img :src="member.avatar" :alt="member.name" class="avatar">
      <h3>{{ member.name }}</h3>
      <ul>
        <li v-for="tag in member.tags">{{ `#${tag}` }}</li>
      </ul>
      <p>{{ member.description }}</p>
      <nav>
        <a href="#">
          <img src="#" alt="">
        </a>
      </nav>
    </section>
  </section>
</template>

<script>
import MemberCard from './MemberCard.vue'
import memebers from '../../../members.json'

export default {
  components: {
    MemberCard
  },
  data () {
    return {
      showDetail: false,
      members: memebers,
      member: {
        name: '树',
        description: '你猜我是不是树',
        avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
        tags: ['前端']
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import './src/style/index.scss';

  .member {
    height: 100vh;
    background-color: $yellow;
    @include flex-cross-center(flex, column);
    justify-content: space-between;
  }
  .main {
    width: 100%;
    @include flex-center;
    flex-wrap: wrap;
    align-content: center;
    padding: 0 5vw;

    &::after {
      content: '';
      flex: 1;
    }
  }
  .detail {
    position: fixed;
    top: 50%;
    left: 50%;
    // width: 400px;
    max-width: 90%;
    transform: translate(-50%, -50%);
    @include flex-center;
    flex-direction: column;
    background: $yellow;
    border: 2px solid $brown;
    padding: $gap-normal $gap-big;
    border-radius: .8vw;
    color: $brown;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid $brown;
      margin-bottom: $gap-small;
    }
    h3 {
      font-size: 20px;
      font-weight: bolder;
      margin-bottom: $gap-small;
    }
    ul {
      list-style: none;
      font-size: 12px;
      margin-bottom: $gap-small;
      li {
        background-color: $brown;
        color: $yellow;
        padding: 0 $gap-tiny;
        line-height: 1.5;
        border-radius: 5px;
      }
    }
  }
  @include max-screen($media-ip6p) {
    .main::after {
      display: none;
    }
  }
</style>
