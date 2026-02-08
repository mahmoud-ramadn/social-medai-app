<script setup lang="ts">
import { cn } from '~/utils/utils';

const props = defineProps<{
  name: string;
  class?: string;
}>();
</script>

<template>
  <svg :class="cn('inline-block fill-current', props.class)">
    <use :xlink:href="`#icon-${props.name}`"></use>
  </svg>
</template>
