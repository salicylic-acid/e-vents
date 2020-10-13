<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title> <g-link to="/">Events</g-link></v-toolbar-title>

      <v-text-field
        placeholder="Search"
        v-model="searchText"
        @click:clear="searchText = ''"
        class="ml-8"
        style="max-width: 350px;"
        prepend-inner-icon="mdi-magnify"
        outlined
        clearable
        rounded
        dense
        hide-details
      />

      <v-spacer/>

      <g-link to="/new-event/"><v-btn>Create Event</v-btn></g-link>

    </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col sm="6" offset-sm="3">
            <slot :searchText="searchText"/>
            </v-col>
          </v-row>
          </v-container>
      </v-main>

    </v-app>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>
  export default {
  data() {
    return {
      searchText: ''
    }
  }
  }
</script>

<style>
.v-toolbar__title a {
  text-decoration: none;
  color: black !important;
}
</style>
