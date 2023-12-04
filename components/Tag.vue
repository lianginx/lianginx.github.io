<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <div class="root">
    <div v-for="item of items" :key="item" class="tag">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  margin: 0 10px 10px 0;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
  cursor: pointer;
  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size);
  line-height: normal;
  color: var(--vp-c-text-3);
}

.tag:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);;
}
</style>
