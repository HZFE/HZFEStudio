<template>
  <section class="home-section about-us">
    <section class="main">
      <article class="animate-container" ref="animateContainer"></article>
      <article class="content">
        <h2>HZFE的诞生</h2>
        <p>今天HZFE一周年了。</p>

        <p>这里，我想聊聊HZFE是什么。</p>

        <p>起初大家都是在国内某大型互联网公司的前端学习群里，这个群收纳了当时的2000名前端新人，许多人都会在里面请教问题、解答疑惑、分享知识。
        随着学习项目的结束，群成员都渐渐熟悉起来，群里的话题也慢慢地从知识交流为主变成划水闲聊为主，加上群员众多，许多正经的技术提问都会马上被其他人的发言淹没，就算有人认真的回答问题，也会碰到一部分秀优越感的人，转而变成撕逼大战。
        当然，在活跃的成员之中，有技术潜力并且有趣的人也不少。那个时候我刚进入前端行业不久，也刚开始学着一个人到外面独立，对工作和生活都没有完全的安全感。
        于是我就有一个想法，收集一批人，既能够在技术问题上互帮互助，也有可能在生活中有所联系。所以起初对于成员的要求很简单也很明确：在杭州工作的前端。
        2016年的9月14日，我创建了HZFE。</p>


        <p>这里，想聊聊HZFE成员。</p>

        <p>当我把群二维码贴在大群里招纳第一批成员时，这个群的未来就已经被决定了。庆幸的是，第一批进来的成员为这个群的氛围打下了很好的基础，他们有个性，肯努力，人品棒，懂生活。
        在一段时间的交流之后，我决定给所有人管理员权限，之后新的成员由大家自己决定拉谁，并不需要通过群主，因为我相信大家的判断。
        之后的成员都是陆续招收的，也已经不再局限于杭州区域内，也不局限于前端开发，因为我想，HZFE并不需要任何死规定。
        再后来，HZFE成员稳定在了18人（加上QQ小冰）。每个人很有自己的想法，很要强，但是每个人都愿意包容，愿意学习，愿意思想碰撞，求同存异。我们互相吸引，互相追赶，竞争，一起进步。我们从工作与学习上的交流，到生活中感情上的分享，我们线下见面，我们一起旅行。
        我们相爱着。</p>


        <p>HZFE，是什么。</p>

        <p>我想，到此时，无论是我们18个人，或是读者，都可以感受到，HZFE早就不是一个QQ群，一个代号了。这是一个团队，这是一群伙伴。他们在一年的相知相识中，已经把这个HZFE，当做了一个家了，大概= =。
        我也很清楚明白，天下无不散之宴席，HZFE中这18个年轻人，将来会组建家庭，会为柴米油盐所忙碌，也会选择在事业上打拼一番，会忙碌，会忘记回来，或者有天发现，他们变得平庸，不再发光。
        但我们还年轻，有冲劲，有力量，我们想要一起奋斗更多。我们有许多想要实现的事情，想要打造一个特别的小团队。我们每个人都规划着HZFE的未来，认真的对待每一个机会。你能感受到生气，感受到活力。
        极其幸运，极其感恩。</p>


        <p>HZFE公众号。</p>

        <p>这个公众号，又是我们的一个新的起点，建立私心是想要记录属于我们HZFE的日常生活，当然现在也还是这么想的，但是也会把一半以上的推送重点，放在技术分享上。
        技术公众号很多，各种转载或者也有很多原创。而我们可能会比较专注于我们每个人的学习过程中的笔记，或者教程，或者是自己翻译一些资料等等。
        总之，没有打算去通过什么厉害的方法，去吸粉，而是，无论分享技术或者生活，都是我们hzfe成长的一个记录，我们想要记录，想要记住。
        至于关注我们的人，感谢你们。我想让你们见证hzfe的成长，也想要HZFE18个人，在你们心中的样子，越来越丰满。
        感谢看到这里的每一个你。</p>

        <p class="last">清真喵  HZFE全栈社区  2017-09-14</p>
      </article>
    </section>
    <footer>

    </footer>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Bodymovin from 'bodymovin'

@Component({})
export default class TheAboutUs extends Vue {
  created () {
    this.$nextTick(() => {
      this.initFishAnimate()
    })
  }

  initFishAnimate () {
    /**
     * 鲤鱼打挺(x
     * @author goodhome update(2017/12/3)
     * */
    let animateContainer = this.$refs.animateContainer
    let animateConfig = {
      container: animateContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'static/fish.json'
    }
    Bodymovin.loadAnimation(animateConfig)
  }
}
</script>

<style scoped lang="scss">
  @import '~style';

  .about-us {
    position: relative;
    min-height: 100vh;
    background-color: $blue;
    @include flex-cross-center(flex, column);
    justify-content: space-between;
    align-items: center;
    // &::before {
    //   content: 'About';
    //   @include flex-center;
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   font-size: 22vw;
    //   font-weight: bold;
    //   color: $blue-lighten;
    //   opacity: 0.2;
    // }
    .animate-container {
      position: absolute;
      width: 100%;
      max-width: 260px;
      top: 0;
      left: 50%;
      transform: translate(-50%, -52%);
    }
  }

  .content {
    color: #fff;
    // width: 80%;
    margin: 0 auto;
    padding: 40px 100px;
    padding-left: 140px;

    h2 {
      font-weight: bold;
      display: inline-block;
      transform: rotate(-90deg) translateX(-100%);
      transform-origin: left bottom;
      font-size: 60px;
      padding-right: 40px;
      line-height: 1.2;
      color: rgba($color: #fff, $alpha: .2);
      border-right: 5px solid rgba($color: #fff, $alpha: .2);
      direction: rtl;
    }
    p {
      font-size: 14px;
      padding: 5px;
      text-indent: 2em;
      font-weight: 400;
      color: rgba($color: #fff, $alpha: .6);
    }
    .last {
      text-align: right;
      margin-top: 40px;
    }
  }

  @include max-screen($media-ip6p) {
    .content {
      color: #fff;
      // width: 80%;
      margin: 0 auto;
      padding: 40px 40px;
      // padding-left: 40px;

      h2 {
        transform: rotate(0deg);
        font-size: 30px;
        padding-left: 40px;
        line-height: 1.2;
        margin-bottom: 40px;
        color: rgba($color: #fff, $alpha: .2);
        border-left: 5px solid rgba($color: #fff, $alpha: .2);
        border-right: none;
      }
      p {
        font-size: 14px;
        padding: 5px;
        text-indent: 2em;
        font-weight: 400;
        color: rgba($color: #fff, $alpha: .6);
      }
      .last {
        text-align: right;
        margin-top: 40px;
      }
    }
  }
</style>
