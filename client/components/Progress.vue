<template lang="pug">
    .progress-bar
        v-progress-circular(
            :size="200"
            :width="15"
            :rotate="-90"
            :value="progressValue"
            class="teal--text") {{ progressValue }}%
        | {{ value }} / {{ max }}
</template>

<script>
export default {
    computed: {
        progressValue() {
            return this.value * 100 / this.max
        },
    },
    props: [
        'value',
        'max'
    ]
  
}
</script>

<style lang="stylus">
.progress-bar
    display flex
    flex-direction column
</style>
