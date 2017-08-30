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
          v-toolbar.indigo(dark)
            v-toolbar-title Войти
          v-card-text
            v-text-field(
              label="Логин"
              value="")
            v-text-field(
              name="input-10-1"
              v-model="password"
              :append-icon="e1 ? 'visibility_off' : 'visibility'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              label="Пароль")

            v-btn(dark success @click.native="dialog = false") Войти
            v-btn(dark error @click.native="dialog = false") Отмена
       

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
      ],
      e1: true,
      password: ''
    }
  }
}
</script>

<style lang="stylus">

</style>

