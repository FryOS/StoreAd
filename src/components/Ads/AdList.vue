<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 vclass="text--secondary" mb-3>My Ads</h1>

        <v-card
          v-for="ad of myAds"
          :key="ad.id"
          class="evelation-10 mb-5">
          <v-layout>
            <v-flex xs4>
              <v-card-media
              :src="ad.imageSrc"
              height="175px"
              >

              </v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">
                  {{ad.title}}
                </h2>
                <p>{{ad.descp}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer class="info"></v-spacer>
                <v-btn
                  :to="'/ad/'+ad.id"
                  class="info">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      }
    }
  }
</script>

<style scoped>

</style>

