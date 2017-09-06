<template lang="pug">
  v-container
    v-layout
      v-flex(xs12)
        v-card.grey.lighten-4
          v-toolbar.indigo(dark)
            v-toolbar-title Registration
          v-card-text
            form
              v-text-field(v-model='email'
                          label='E-mail' 
                          :error-messages="errors.collect('email')"
                          v-validate="'required'" 
                          data-vv-name='email' 
                          required='')
              v-text-field(v-model='username'
                          label='Name' 
                          :error-messages="errors.collect('username')"
                          v-validate="'required'" 
                          data-vv-name='username' 
                          required)
              v-text-field(v-model='password'
                          label='Password' 
                          :error-messages="errors.collect('password')" 
                          v-validate="'required'" 
                          data-vv-name='password' 
                          required
                          name="password"
                          :append-icon="e1 ? 'visibility_off' : 'visibility'"
                          :append-icon-cb="() => (e1 = !e1)"
                          :type="e1 ? 'password' : 'text'")
                          
              v-checkbox(v-model='checkbox' 
                        value='1'
                        label='Agree' 
                        :error-messages="errors.collect('checkbox')" 
                        data-vv-name='checkbox')
              v-btn(@click='submit') Registration
              v-btn(@click='clear') clear
</template>

<script>
  import axios from 'axios'

  export default {
    $validates: true,
    data () {
      return {
        e1: true,
        password: '',
        email: '',
        username: '',
        checkbox: null
      }
    },
    methods: {
        
      submit () {
        if(!this.email || !this.password || !this.username) return;

        axios.post('/register', {
          email: this.email,
          name: this.username,
          password: this.password
        }).then(function(response) {
          console.log(response);
          // if(data.message){
          //   $scope.error = true;
          //   $scope.errorMessage = data.message;
          // }

          // if(data.redirect){
          //   window.location = '/';
          // }
        });

        // this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.password = ''
        this.select = null
        this.checkbox = false
        this.$validator.clean()
      }
    }

  }
</script>

<style style="stylus" scoped>

</style>
