<template>
  <article>
    {{ component }}
  </article>
</template>

<script>
export default {
    data () {
        return {
            component: 'Component'
        }
    }
}
</script>

<style scoped>
  article {
      background: #ccc;
  }
</style>
