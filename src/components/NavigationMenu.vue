<template>
  <v-app-bar color="primary">
    <template #prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>明日方舟一图流</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <template #prepend>
      <v-list-item
        lines="two"
        :prepend-icon="mdiNumeric1Box"
        title="明日方舟一图流"
        subtitle="yituliu.site"
      ></v-list-item>
    </template>
    <v-divider nav></v-divider>
    <v-list
      ><v-list-item
        :prepend-icon="mdiHomeOutline"
        title="主页"
        value="home"
        to="/"
      ></v-list-item>
      <v-list-item
        :prepend-icon="mdiChartBoxOutline"
        title="刷图一图流"
        value="material"
        to="/onePage"
      ></v-list-item>
      <v-list-item
        :prepend-icon="mdiStoreOutline"
        title="常驻商店性价比"
        value="store"
      ></v-list-item
      ><v-list-item
        :prepend-icon="mdiStoreClockOutline"
        title="活动商店性价比"
        value="activity"
      ></v-list-item
      ><v-list-item
        :prepend-icon="mdiGiftOutline"
        title="礼包性价比"
        value="pack"
      ></v-list-item
      ><v-list-item
        :prepend-icon="mdiCalculator"
        title="攒抽计算器"
        value="gacha"
      ></v-list-item
      ><v-list-item
        :prepend-icon="mdiCalendarCursorOutline"
        title="排班表生成器"
        value="riic"
      ></v-list-item
      ><v-list-item
        :prepend-icon="mdiCodeBraces"
        title="开发信息"
        value="dev"
      ></v-list-item
      ><v-list-item
        :prepend-icon="mdiInformationOutline"
        title="关于我们"
        value="about"
      ></v-list-item
    ></v-list>
  </v-navigation-drawer>
  <v-main><router-view /></v-main>
</template>

<script setup>
import {
  mdiNumeric1Box,
  mdiHomeOutline,
  mdiChartBoxOutline,
  mdiStoreOutline,
  mdiStoreClockOutline,
  mdiGiftOutline,
  mdiCalculator,
  mdiCalendarCursorOutline,
  mdiCodeBraces,
  mdiInformationOutline,
} from "@mdi/js";
import { ref } from "vue";

const drawer = ref(false);
</script>
