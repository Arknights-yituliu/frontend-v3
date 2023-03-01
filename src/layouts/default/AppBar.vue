<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>明日方舟一图流</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        prepend-icon="mdi-numeric-1-box"
        title="明日方舟一图流"
        subtitle="yituliu.site"
      ></v-list-item>
    </template>
    <v-divider nav></v-divider>
    <v-list
      ><v-list-item
        prepend-icon="mdi-home-outline"
        title="主页"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-chart-box-outline"
        title="刷图一图流"
        value="material"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-store-outline"
        title="常驻商店性价比"
        value="store"
      ></v-list-item
      ><v-list-item
        prepend-icon="mdi-store-clock-outline"
        title="活动商店性价比"
        value="activity"
      ></v-list-item
      ><v-list-item
        prepend-icon="mdi-gift-outline"
        title="礼包性价比"
        value="pack"
      ></v-list-item
      ><v-list-item
        prepend-icon="mdi-calculator"
        title="攒抽计算器"
        value="gacha"
      ></v-list-item
      ><v-list-item
        prepend-icon="mdi-calendar-cursor-outline"
        title="排班表生成器"
        value="riic"
      ></v-list-item
      ><v-list-item
        prepend-icon="mdi-code-braces"
        title="开发信息"
        value="dev"
      ></v-list-item
      ><v-list-item
        prepend-icon="mdi-information-outline"
        title="关于我们"
        value="about"
      ></v-list-item
    ></v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>
