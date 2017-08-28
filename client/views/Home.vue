<template lang="pug">
  .page
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
  display flex 
  align-items center
  flex-direction column
  justify-content center
.title 
  font-size 16px
  text-transform uppercase
  text-align center
  span 
    font-size 30px
    display block
</style>