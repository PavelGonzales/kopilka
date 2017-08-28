<template lang="pug">
    .progress-bar
        progress(:value="value" :max="max")
        .count {{ value }} / {{ max }}
</template>

<script>
export default {
    props: [
        'value',
        'max'
    ]
  
}
</script>

<style lang="stylus">

</style>
