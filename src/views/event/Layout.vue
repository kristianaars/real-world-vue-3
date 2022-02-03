<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.title }}</h1>

    <div id="nav">

      <router-link :to="{ name: 'EventDetails', params: { id }}"> Details </router-link>
      |
      <router-link :to="{ name: 'EventRegister', params: { id }}"> Register </router-link>
      |
      <router-link :to="{ name: 'EventEdit', params: { id }}"> Edit </router-link>

    </div>

    <router-view :event="GStore.event"></router-view>
  </div>
</template>

<script>
export default {
  props: ['id'],
  inject: ['GStore']
}
</script>
