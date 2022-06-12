<script setup lang="ts">
import { ISize, IColor } from '../../interfaces/generals';
import { computed } from "vue";

interface IPropsButton {
  label?: string;
  size: ISize;
  color: IColor
}

const props = defineProps<IPropsButton>();
const getClassList = computed(() => {
  return ["AButton--" + props.size, "AButton--" + props.color];
})

</script>

<template>
  <button class="AButton" :class="getClassList">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.AButton {
  width: 100%;
}
</style>