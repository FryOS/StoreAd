<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary" mb-3>New Ad</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field name="title" label="Ad title" type="text"
                        v-model="title"
                        :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field id="description" name="description" label="Ad description" type="text"

                        v-model="description"
                        multi-line
                        :rules="[v => !!v || 'description is required']"
          ></v-text-field>
        </v-form>
        <v-layout row mb-3>
          <v-flex xs12>
            <v-btn class="info">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img src="" height="150" alt="">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-switch label="Add to promo" v-model="promo" color="primary"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success" @click="createAd" :disabled="!valid">Create AD</v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false

      }
    },
    methods: {
      createAd() {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://sabe.io/content/tutorials/getting-started-with-vue-js/hero.png'
          }
          this.$store.dispatch('createdAd', ad)
        }

      }
    }
  }
</script>

<style scoped>

</style>

