<script setup lang="ts">
import { ref } from 'vue';
import MMenubar from '../MMenubar/MMenubar.vue';
</script>

<template>
  <header class="OHeader">
    <m-menubar class="OHeader__Menubar"/>
  </header>
</template>

<style scoped lang="scss">
@import "../../ions/main.scss";
.OHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: linear-gradient(to right, $color-1, $color-2, $color-3, $color-4, $color-5, $color-6) ;
  height: 60px;
  & .OHeader__Menubar {
    width: 30%;
    margin-left: auto;
    margin-right: 5rem;
  }
}
</style>
