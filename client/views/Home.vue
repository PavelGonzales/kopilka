<template lang="pug">
  .page
    v-toolbar.grey.darken-4.white--text(dark)
      v-toolbar-side-icon
      v-toolbar-title Копилка
      v-spacer
      v-btn(icon)
        v-icon search
      v-btn(icon)
        v-icon apps
      v-btn(icon)
        v-icon refresh
      v-btn(icon)
        v-icon more_vert
    .page__content
      h1.title цель: 
        span машина
      counter
      progress-bar(:value="accumulated" :max="finalPoint")
    
</template>

<script>
import Counter from 'components/Counter'
import ProgressBar from 'components/Progress.vue'

export default {
  computed: {
    accumulated() {
      return this.$store.state.accumulated
    },
    finalPoint() {
      return this.$store.state.finalPoint
    }
  },
  components: {
    Counter,
    ProgressBar
  }
}
</script>

<style lang="stylus">
.page 
  // background-color #222320
  min-height 100vh
  position relative
  &__content

    display flex 
    align-items center
    flex-direction column
    justify-content center
    padding-top 100px
  
.title 
  font-size 16px
  text-transform uppercase
  text-align center
  span 
    font-size 30px
    display block
</style>