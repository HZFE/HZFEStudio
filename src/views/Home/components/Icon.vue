<template>
  <a :href="href" target="_blank" rel="nofollow">
    <span v-html="icon" class="icon"></span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import icons from '../../../uis/icons'

@Component({})
export default class app extends Vue {
  @Prop() name: string;
  @Prop() href: string;
  get icon () {
    return icons[this.name].data
  }
}
</script>

<style lang="scss">
  .icon svg {
    width: 100%;
    height: auto;
    path {
      fill: rgba(255, 255, 255, .2);
    }
  }
</style>

<style lang="scss" scoped>
  a {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
</style>

