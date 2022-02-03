<template>
  <div v-if="event">
    <p>Register the event here...</p>

    <button @click="register">Register Me</button>
  </div>
</template>

<script>

export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register () {
      // Call to API

      this.GStore.flashMessage = 'You have successfully registered for ' + this.event.title

      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
