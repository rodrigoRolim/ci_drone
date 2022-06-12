<script setup lang="ts">
import { IColor, ISize } from '../../interfaces/generals';
import { computed } from "vue";

interface IPropsLink {
  color?: IColor;
  size?: ISize;
  link: string;
}

const props = defineProps<IPropsLink>();

const getClassList = computed(() => {
  return ["ALink--" + props.size, "ALink--" + props.color];
});

</script>
<template>
  <a class="ALink text-link--hover" :class="getClassList">
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
.ALink--white {
  color: $color-text-witheness;
}
</style>