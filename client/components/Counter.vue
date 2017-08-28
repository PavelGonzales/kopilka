<template lang="pug">
  v-container(fluid="fluid" class="text-xs-center")
    v-layout(row wrap)
      v-flex(lg12)
        h6 Отложил сегодня?
        v-btn(success @click="$store.commit('INCREMENT')") Да
        v-btn(light @click="$store.commit('DECREMENT')") Нет
        v-btn(@click="$store.dispatch('incrementAsync')") Increment Async
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
