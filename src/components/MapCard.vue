<template>
  <v-card>
    <v-toolbar density="compact">
      <v-icon class="ms-3" :icon="mdiChartBoxOutline"></v-icon>
      <v-toolbar-title class="ms-2">刷图推荐</v-toolbar-title>
      <v-btn icon><v-icon :icon="mdiArrowRight"></v-icon></v-btn>
    </v-toolbar>
    <v-carousel
      height="148"
      hide-delimiters
      :show-arrows="false"
      :interval="3000"
    >
      <v-carousel-item>
        <v-container fluid>
          <v-row dense class="text-center">
            <v-col>
              <v-icon class="bg-30063"></v-icon>
              <p class="mt-1">全新装置</p>
              <p class="text-h5">7-5</p>
            </v-col>
            <v-col>
              <v-icon class="bg-30043"></v-icon>
              <p class="mt-1">异铁组</p>
              <p class="text-h5">10-11</p>
            </v-col>
            <v-col>
              <v-icon class="bg-30083"></v-icon>
              <p class="mt-1">轻锰矿</p>
              <p class="text-h5">10-7</p>
            </v-col>
            <v-col>
              <v-icon class="bg-31013"></v-icon>
              <p class="mt-1">凝胶</p>
              <p class="text-h5">10-3</p>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item>
        <v-container fluid>
          <v-row dense class="text-center">
            <v-col>
              <v-icon class="bg-30073"></v-icon>
              <p class="mt-1">扭转醇</p>
              <p class="text-h5">11-13</p>
            </v-col>
            <v-col>
              <v-icon class="bg-30053"></v-icon>
              <p class="mt-1">酮凝集组</p>
              <p class="text-h5">JT8-3</p>
            </v-col>
            <v-col>
              <v-icon class="bg-30103"></v-icon>
              <p class="mt-1">RMA70-12</p>
              <p class="text-h5">4-9</p>
            </v-col>
            <v-col>
              <v-icon class="bg-31023"></v-icon>
              <p class="mt-1">炽合金</p>
              <p class="text-h5">11-14</p>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item>
        <v-container fluid>
          <v-row dense class="text-center">
            <v-col class="col">
              <v-icon class="bg-act24side_melding_5"></v-icon>
              <p class="mt-1">兽之泪</p>
              <p class="text-h5">CF-4</p>
              <v-badge class="badge" content="UP" color="red" inline></v-badge>
            </v-col>
            <v-col class="col">
              <v-icon class="bg-30053"></v-icon>
              <p class="mt-1">酮凝集组</p>
              <p class="text-h5">JT8-3</p>
              <v-badge class="badge" content="UP" color="red" inline></v-badge>
            </v-col>
            <v-col>
              <v-icon class="bg-30103"></v-icon>
              <p class="mt-1">RMA70-12</p>
              <p class="text-h5">4-9</p>
            </v-col>
            <v-col>
              <v-icon class="bg-31023"></v-icon>
              <p class="mt-1">炽合金</p>
              <p class="text-h5">11-14</p>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script setup>
import "../styles/sprites.css";
import { mdiChartBoxOutline, mdiArrowRight } from "@mdi/js";
</script>

<style scoped>
.col {
  position: relative;
}

.badge {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
