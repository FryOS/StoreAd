<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1 class="text--secondary" mb-3>My Books</h1>
        <v-card v-for="book of books" class="mb-4">
          <v-card-media
            :src="book.imgSrc"
            height="100px"
          ></v-card-media>
          <v-card-text>
            <h1 class="text--primary">{{book.author}}</h1>
            <h3 class="text--primary">{{book.name}}</h3>
            <p>{{book.year}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" flat>Edit</v-btn>
            <v-btn class="success">Add</v-btn>
          </v-card-actions>

        </v-card>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['books']


  }
</script>

<style scoped>

</style>
