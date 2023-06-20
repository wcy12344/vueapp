<script setup lang="ts">
const router = useRouter()
const sx = () => {
  router.replace('/')
}
</script>

<template>
  <div @click="sx">
    组件test
  </div>
</template>
