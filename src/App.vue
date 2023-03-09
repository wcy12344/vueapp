<script setup lang="ts">
const num = ref<number>(23)
</script>

<template>
  <div class="bg-red-600 w-72 h-72 flex justify-center items-center text-blue-600">
    {{ num }}
  </div>
</template>
