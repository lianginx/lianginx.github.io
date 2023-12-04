<script setup lang="ts">
import { computed, ref } from 'vue'
import type { AppItemType } from '../../../types'
import AppItem from '../../../components/AppItem.vue'

const props = defineProps<{
  apps: AppItemType[]
}>()

const category = ref({
  items: ['全部', ...new Set(props.apps.map(v => v.category))],
  current: '全部',
})

const apps = computed(() => props.apps.filter((v) => {
  if (category.value.current === category.value.items[0])
    return true
  return v.category === category.value.current
}))
</script>

<template>
  <div>
    <div class="root">
      <div class="category">
        <div
          v-for="item in category.items" :key="item"
          class="category-item" :class="{ 'category-item-active': category.current === item }" @click="category.current = item"
        >
          {{ item }}
        </div>
      </div>
      <div class="content">
        <AppItem v-for="app of apps" :key="app.name" :item="app" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.root {
  --pd-px: 15px;
}

h1 {
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.5;
}

.tip {
  font-size: small;
}

.root {
  margin: 0 auto;
  margin-bottom: 5%;
  padding: var(--pd-px);
}

.title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: var(--pd-px);
}

.category {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: var(--pd-px);
}

.category-item {
  margin-right: var(--pd-px);
  margin-bottom: var(--pd-px);
  cursor: pointer;
}

.category-item:hover {
  color: var(--vp-c-brand);
}

.category-item-active {
  color: var(--vp-c-brand);
  padding-bottom: 2px;
  border-bottom: 1.5px solid var(--vp-c-brand);
}

.content {
  display: grid;
  padding: var(--pd-px);
  gap: 30px;
  grid-template-columns: repeat(5, 1fr);
}

@media (min-width: 1200px) {
  .root {
    width: 1200px;
  }
}

@media (max-width: 800px) and (min-width: 500px) {
  .content {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 500px) {
  .content {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
