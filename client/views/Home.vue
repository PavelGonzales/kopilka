<template lang="pug">
  .page
    app-header
    .page__content
      h1.title цель: 
        span машина
      counter
      progress-bar(:value="accumulated" :max="finalPoint")
      v-layout(row wrap)
        v-flex(lg12v)
          v-chip.green.white--text
            v-avatar.green.darken-4 {{ dayLeft }}
            | дней осталось
          v-chip.green.white--text
            v-avatar.green.darken-4 {{ totalDay }}
            | дней всего
          v-chip.green.white--text
            v-avatar.green.darken-4 {{ totalDay - dayLeft }}
            | дней прошло
          v-chip.green.white--text
            v-avatar.green.darken-4 {{ sumPerDay }}
            | рублей/день

        
    
</template>

<script>
import Counter from 'components/Counter'
import ProgressBar from 'components/Progress.vue'
import AppHeader from 'components/Header.vue'
import moment from 'moment';

export default {
  computed: {
    accumulated() {
      return this.$store.state.accumulated
    },
    finalPoint() {
      return this.$store.state.finalPoint
    },
    dateStart() {
      return this.$store.state.date_start
    },
    dateEnd() {
      return this.$store.state.date_end
    },
    dayLeft() {
      return moment(this.dateEnd).diff(moment(), 'days')
    },
    totalDay() {
      return moment(this.dateEnd).diff(moment(this.dateStart), 'days')
    },
    sumPerDay() {
      return Math.ceil(this.finalPoint / this.totalDay)
    }
  },
  components: {
    Counter,
    ProgressBar,
    AppHeader
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