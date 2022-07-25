<script setup lang="ts">
import { iSize, iColor } from "@/interfaces/designs.d";
import { computed } from "vue";

interface IPropsButton {
  label?: string;
  size: iSize;
  color: iColor
}

const props = defineProps<IPropsButton>();
const getClassList = computed(() => {
  return ["AButton--" + props.size, "AButton--" + props.color];
})

</script>

<template>
  <button class="AButton" :class="getClassList" data-testid="AButton">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.AButton {
  width: 100%;
}
.AButton--small {
  width: 10px;
  height: 10px;
}
.AButton--medium {
  width: 1rem;
  height: 1rem;
}
.AButton--large {
  width: 1.5rem;
  height: 1.5rem;
}
.AButton--success {
  background-color: $color-greeness;
  color: $color-text-witheness;
}
</style>