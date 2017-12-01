<template>
  <section class="home-section member">
    <header>
      <div class="rect-skew_brown">
        <h2>Member</h2>
      </div>
    </header>
    <section class="main">
      <template v-for="member in members">
        <MemberCard :member="member"></MemberCard>
      </template>
    </section>
    <footer>
      <img src="static/img/Seedling.svg" alt="Seedling" aria-hidden="true">
    </footer>
  </section>
</template>

<script>
import MemberCard from './MemberCard.vue'

export default {
  name: 'TheMember',
  components: {
    MemberCard
  },
  data () {
    return {
      members: [
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        },
        {
          name: '树',
          description: '描述描述描述描述描述描述',
          avatar: 'https://avatars2.githubusercontent.com/u/3984824?s=460&v=4',
          tags: ['前端']
        }
      ]
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
  .main {
    width: 100%;
    @include flex-center;
    flex-wrap: wrap;
    align-content: center;
  }
</style>
