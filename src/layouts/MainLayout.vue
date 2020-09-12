<!--
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/src/layouts/MainLayout.vue
 * @Description    : 
-->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
         node 全栈学习项目
        </q-toolbar-title>

        <div>加油</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
  
              <q-item v-for="(item,index) in  menu_data"   :key="`menu_data_${index}`" 
              @click="go_to_page(item)"
               clickable v-ripple>
        <q-item-section> {{item.title}} </q-item-section>
      </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


const menu_data = [
  {
    title: '教程模块',
    path: 'tutorials',
    name:"tutorials",
  },

];

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
     menu_data
    }
  },
  methods: {
    go_to_page(item) {
       this.$router.push({
         name:item.name
       })
    }
  },
}
</script>
