<script setup lang="ts">
import ALink from "../ALink/ALink.vue";
interface MenuItems {
  item: {
    label: string,
    icon: string
  }
}
interface IPropsMenubar {
  menuItems: MenuItems[]
}
</script>

<template>
  <div class="MMenubar">
    <a-link link="#" color="white">secao 1</a-link>
    <a-link link="#" color="white">secao 2</a-link>
    <a-link link="#" color="white">secao 3</a-link>
    <a-link link="#" color="white">secao 4</a-link>
  </div>
</template>

<style scoped lang="scss">
.MMenubar {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
}
</style>