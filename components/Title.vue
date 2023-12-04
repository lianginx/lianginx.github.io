<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <div class="subtitle">
      {{ subtitle }}
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 3rem;
}

h1 {
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.5;
}

.subtitle {
  font-size: small;
}
</style>
