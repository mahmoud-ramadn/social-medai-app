<script setup lang="ts">
defineProps<{
  id: number;
  reviewNumber: number;
  reviewText: string;
}>();

defineEmits<{
  (e: 'edit', id: number): void;
  (e: 'delete', id: number): void;
}>();
</script>

<template>
  <div class="bg-white mt-10 rounded-lg shadow-md p-5 flex justify-between items-start">
    <div>
      <h1 class="text-lg font-semibold text-gray-900">
        {{ reviewNumber }}
      </h1>
      <p class="text-gray-500">
        {{ reviewText }}
      </p>
    </div>

    <div class="flex gap-3">
      <button
        @click="$emit('edit', id)"
        class="text-blue-500 cursor-pointer hover:text-blue-700"
        title="Edit"
      >
        ✏️
      </button>

      <button
        @click="$emit('delete', id)"
        class="text-red-500 cursor-pointer hover:text-red-700"
        title="Delete"
      >
        🗑️
      </button>
    </div>
  </div>
</template>
