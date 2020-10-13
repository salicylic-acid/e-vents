<template>
  <Layout>
    <h1>{{$page.event.title}}</h1>
    <img
      class="white--text align-end"
      height="400px"
      :src="`http://localhost:1337${$page.event.image}`"
    />

    <p>{{$page.event.description}}</p>
    <p>{{formatDate($page.event.date)}}</p>

      </Layout>
</template>

<page-query>

query ($id: ID!){
  event(id: $id) {
      id
      title
      duration
      price
      date
      image
      description
  }
}

</page-query>

<script>
import moment from 'moment'

export default {
  methods: {
  formatDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm a')
      }
    }
  }

</script>
