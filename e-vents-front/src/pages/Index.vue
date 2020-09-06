<template>
  <Layout>

  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">

          <v-tabs v-model="tab" grow>
          <v-tab>Item One</v-tab>
          <v-tab>Item Two</v-tab>
          <v-tab>Item Three</v-tab>
          </v-tabs>



<v-card max-width="300"
v-for="edge in $page.events.edges" :key="edge.node.id">

    <v-img class="white--text align-end" 
    height="200px" 
    :src="https://localhost:1337${eddge.node.thumbnail}"
    /> 

    <v-card-title>{{ edge.node.title }}</v-card-title>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>
        <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>


</v-card>



        </v-col>
     </v-row> 
   </v-container>



  </Layout>
</template>

<page-query>
  query {
    events: allEvent {
      edges {
        node {
          id
          title
          description
          price
          duration
          date
          thumbnail
          image
        }
      }
    }
  }

</page-query>



<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
   return {
    tab: 0
   }
  },
  watch: {
    tab(val) {

      if (this.tab === 0) {
      this.showAllEvents()
      } else {
      this.showEventsByType()
      }

    } 
  }, 
methods: {
    showAllEvents() {
      console.log('all')
      this.events = this.$page.events.edges
    },
    showEventsByType() {

    this.events = this.$page.events.edges.filter(edge => {
        return
    })

    console.log('type')
    }
}


}
</script>


<style>
.home-links a {
  margin-right: 1rem;
}
</style>
