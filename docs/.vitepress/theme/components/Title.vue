<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 15px;
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