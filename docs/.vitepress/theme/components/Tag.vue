<template>
  <div class="root">
    <div class="tag" v-for="item of items">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
  items: string[]
}>()
</script>

<style scoped>
.root {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  margin: 0 10px 10px 0;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--vp-c-bg-mute);
  cursor: default;

  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size);
  line-height: normal;
  color: var(--vp-c-text-code);
}

.tag:hover {
  background-color: rgba(66, 184, 131, .1);
  color: rgba(66, 184, 131, 1);
}
</style>