<template>
  <v-container class="fill height" fluid style="min-height: 480px">
    <v-card>
      <v-img
        src="https://miro.medium.com/max/2000/1*9NJlqVUQpUbPm1ptkCKI0w.jpeg"
        aspect-ratio="2"
        contain
      >
      </v-img>
    </v-card>
    <v-card-title outlined class="mx-auto"> Art Gallery </v-card-title>
    <v-row>
      <v-col md="4" v-for="artWork in serverResponse.data" :key="artWork.id">
        <ArtPrint :artInfo="artWork" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const serverResponse = await $axios.$get(
      'https://api.artic.edu/api/v1/artworks?limit=10'
    )
    return {
      serverResponse,
    }
  },
}
</script>