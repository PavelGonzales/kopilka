<template lang="pug">
  v-layout(row justify-center style="position: relative;")  
    v-toolbar.grey.darken-4.white--text(dark)
      v-toolbar-side-icon
      v-toolbar-title Копилка
      v-spacer
      v-btn(icon)
        v-icon apps

      v-menu(left bottom)
        v-btn(icon slot="activator" dark)
          v-icon more_vert
        v-list
          v-list-tile(v-for="item in items" :key="item.title")
            v-list-tile-title {{ item.title }}

      v-dialog(v-model="dialog" lazy absolute)
        v-btn(slot="activator" dark) Войти
          v-icon(right) assignment_ind
        v-card
          v-card-title
            .headline Use Google's location service?
          v-card-text Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          v-card-actions
            v-spacer
            v-btn(class="green--text darken-1" flat="flat" @click.native="dialog = false") Disagree
            v-btn(class="green--text darken-1" flat="flat" @click.native="dialog = false") Agree
       

</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      test: true,
      items: [
        {
          title: 'About'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">

</style>

