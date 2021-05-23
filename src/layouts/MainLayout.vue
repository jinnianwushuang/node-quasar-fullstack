<!--
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/src/layouts/MainLayout.vue
 * @Description    : 
-->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-resize-observer @resize="on_window_resize" />
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
      :width="120"
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item
          v-for="(item, index) in menu_data"
       
          :class="item.name == $route.name?'bg-primary text-white':''"
          :key="`menu_data_${index}`"
          @click="go_to_page(item)"
          clickable
          v-ripple
        >
          <q-item-section> {{ item.title }} </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from "vuex";

import menu_data from "src/config/menu.js";
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      menu_data
    };
  },
  methods: {
    ...mapActions([
      "set_window_size" //also supports payload `this.nameOfAction(amount)`
    ]),
    go_to_page(item) {
      this.$router.push({
        name: item.name
      });
    },
    on_window_resize(size) {
      // console.log("----size  ---", size);
      // size.height= size.height<600?600:size.height
      // size.width =size.width<1200?1200:size.width
      this.set_window_size(size);
    }
  }
};
</script>
