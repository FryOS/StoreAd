<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1 class="text--secondary" mb-3>My Books</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field name="name" label="Add name" type="text"
                        v-model="name"
                        :rules="[v => !!v || 'Name is required']"
          ></v-text-field>
          <v-text-field name="author" label="Add author" type="text"

                        v-model="author"
                        :rules="[v => !!v || 'Author is required']"
          ></v-text-field>
          <v-text-field name="year" label="Add year" type="text"

                        v-model="year"
                        :rules="[v => !!v || 'Year is required']"
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        author: '',
        year: ''

      }
    }
  }
</script>

<style scoped>

</style>

