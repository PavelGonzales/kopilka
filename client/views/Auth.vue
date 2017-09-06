<template lang="pug">
   v-app
    v-tabs(dark, fixed, centered)
      v-tabs-bar
        v-tabs-slider.yellow
        v-tabs-item(:href="'login'")
          | Login
        v-tabs-item(:href="'registration'")
          | Registration
      v-tabs-items
        v-tabs-content(:id="'login'")
          v-card(flat='')
            v-card-text 
              login
        v-tabs-content(:id="'registration'")
          v-card(flat='')
            v-card-text 
              registration

    
</template>

<script>
import Login from 'components/Login'
import Registration from 'components/Registration'


export default {
  data() {
    return {

    }
  },
  computed: {
    
  },
  components: {
    Login,
    Registration
  }
}
</script>

<style lang="stylus">

</style>