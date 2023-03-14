<template>
  <v-card rounded="0" elevation="0">
    <v-toolbar density="compact" title="颜色说明" color="white">
      <v-btn :icon="mdiClose"></v-btn>
    </v-toolbar>
    <div class="ms-5">
      <p class="text-orange font-weight-bold text-h6">橙色：双最优</p>
      <p class="text-purple font-weight-bold text-h6">
        紫色：效率最高（长期最优）
      </p>
      <p class="text-green font-weight-bold text-h6">
        绿色：期望最低（短期最优）
      </p>
    </div>
    <v-card-actions class="justify-end">
      <v-btn>不再显示</v-btn>
      <v-btn>关闭</v-btn>
    </v-card-actions>
  </v-card>
  <v-card rounded="0" elevation="0">
    <v-tabs v-model="tab" center-active show-arrows bg-color="primary">
      <v-tab value="blue">蓝材料</v-tab>
      <v-tab value="green">绿材料</v-tab>
      <v-tab value="orundum">搓玉版</v-tab>
      <v-tab value="history">往期活动</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="blue">TODO</v-window-item>
        <v-window-item value="green">TODO</v-window-item>
        <v-window-item value="orundum">TODO</v-window-item>
        <v-window-item value="history">TODO</v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { mdiClose } from "@mdi/js";
import { ref } from "vue";
const tab = ref();
</script>
