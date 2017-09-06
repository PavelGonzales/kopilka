<template lang="pug">
  v-container
    v-layout
      v-flex(xs12)
        v-card.grey.lighten-4
          v-toolbar.indigo(dark)
            v-toolbar-title Login
          v-card-text
            form
              v-text-field(v-model='email'
                          label='E-mail' 
                          :error-messages="errors.collect('email')"
                          v-validate="'required'" 
                          data-vv-name='email' 
                          required='')
              v-text-field(v-model='password'
                          label='Password' 
                          :error-messages="errors.collect('password')" 
                          v-validate="'required'" 
                          data-vv-name='password' 
                          required=''
                          name="input-10-1"
                          :append-icon="e1 ? 'visibility_off' : 'visibility'"
                          :append-icon-cb="() => (e1 = !e1)"
                          :type="e1 ? 'password' : 'text'")
                          
              v-checkbox(v-model='checkbox' 
                        value='1'
                        label='Remember' 
                        :error-messages="errors.collect('checkbox')" 
                        data-vv-name='checkbox')
              v-btn(@click='submit') submit
              v-btn(@click='clear') clear
</template>

<script>
  export default {
    $validates: true,
    data () {
      return {
        e1: true,
        password: '',
        email: '',
        checkbox: null
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
        this.$validator.clean()
      }
    }

  }
</script>

<style style="stylus" scoped>

</style>
