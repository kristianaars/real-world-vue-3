<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here....</h3>

  <router-link :to="{name: 'EventList'}">Take me back to the home page!</router-link>
</template>

<script>
export default {
  name: 'NotFound.vue',
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>

<style scoped>

</style>
