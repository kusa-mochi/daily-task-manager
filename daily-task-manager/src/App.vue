<template>
  <v-app>
    <v-main>
      <v-app-bar-nav-icon
        @click.stop="isSideMenuShown = !isSideMenuShown"
      ></v-app-bar-nav-icon>
      <router-view />
    </v-main>
    <v-navigation-drawer v-model="isSideMenuShown" absolute temporary>
      <v-list>
        <v-list-item-group v-model="selectedSideMenuIndex">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>file-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> 新規作成 </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> 開く </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> 保存 </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> 名前を付けて保存 </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> ヘルプ </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> バージョン情報 </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      isSideMenuShown: false,
      selectedSideMenuIndex: null,
    };
  },
});
</script>
