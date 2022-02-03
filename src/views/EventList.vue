<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <router-link
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page !== 1"
      >Prev Page
    </router-link>

    <router-link
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="prev"
      v-if="hasNextPage"
      >Next Page
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data () {
    return {
      events: null,
      totalEvents: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    EventService.getEvents(2, parseInt(to.query.page) || 1)
      .then(response => {
        next(vm => {
          vm.events = response.data
          vm.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate (to) {
    return EventService.getEvents(2, parseInt(to.query.page) || 1)
      .then(response => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },
  computed: {
    totalPages () {
      return Math.ceil(this.totalEvents / 2)
    },
    hasNextPage () {
      return this.page !== this.totalPages
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
