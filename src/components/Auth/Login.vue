<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>

          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field prepend-icon="person" name="login" label="email" type="email"
              v-model="email"
              :rules="emailRules"
              ></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"
              :counter="6"
              v-model="password"
              :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary"
            @click="onSubmit"
            :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'password is required',
          v => (v && v.length >= 6) || 'Passsword must be equal or more than 6 '
        ]
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.email = ''
          this.password = ''

          console.log(user)
        }
      }
    }
  }
</script>

<style scoped>

</style>
