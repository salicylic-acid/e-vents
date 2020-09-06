<template>
  <v-app>
  <v-app-bar app>
    <v-toolbar-title>Events</v-toolbar-title>

    <v-text-field placeholder="Search" class="ml-8" outlined rounded dense hide-details style="max-width: 350px;" prepend-inner-icon='mdi-magnify'/>

    <v-spacer />
    <v-btn>create event</v-btn>
  </v-app-bar>
    <v-main>
    <slot/>
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

