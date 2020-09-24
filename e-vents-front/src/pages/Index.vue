<template>
  <Layout v-slot="{ searchText }">
      <v-tabs v-model="tab" grow>
              <v-tab>Item one</v-tab>
              <v-tab>Item two</v-tab>
              <v-tab>Item Three</v-tab>
      </v-tabs>

    <v-row class="justify-space-around">

    <v-card
  class="mx-auto"
  max-width="400"
>
  <v-img
    class="white--text align-end"
    height="200px"
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  >
    <v-card-title>Top 10 Australian beaches</v-card-title>
  </v-img>

  <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

  <v-card-text class="text--primary">
    <div>Whitehaven Beach</div>

    <div>Whitsunday Island, Whitsunday Islands</div>
  </v-card-text>

  <v-card-actions>
    <v-btn
      color="orange"
      text
    >
      Share
    </v-btn>

    <v-btn
      color="orange"
      text
    >
      Explore
    </v-btn>
  </v-card-actions>
</v-card>

    </v-row>
  </Layout>
</template>



<script>
  export default {
    metaInfo: {
    title: 'This is the place'
    },
    data() {
      return {
        tab: 0,
        events: []
        }
      },
      watch() {
        this.tab === 0 ? this.showAllEvents() : this.showEventsByType()
      },
    methods: {
      showAllEvents() {
        console.log('all')
      },
      showEventsByType() {
        console.log('events')
      }
    }

  }
</script>

<style>

.home-links a {
  margin-right: 1rem;
}

.v-card {
  margin-top: 60px;
}

</style>
