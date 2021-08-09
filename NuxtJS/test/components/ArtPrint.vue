<template>
  <v-card class="mx-auto" max-width="480" elevation="5">
    <v-img height="150" v-if="artInfo.thumbnail" :src="artInfo.thumbnail.lqip">
    </v-img>
    <v-img v-else src="https://i.stack.imgur.com/y9DpT.jpg" height="150">
    </v-img>
    <v-card-title>
      {{ artInfo.title }}
    </v-card-title>
    <v-card-subtitle>
      Place:
      <span v-if="artInfo.place_of_origin">
        {{ artInfo.place_of_origin }}
      </span>
      <span v-else> Unknown </span>
    </v-card-subtitle>
    <v-card-text>
      Artist:
      {{ artInfo.artist_display }}
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ['artInfo'],
}
</script>