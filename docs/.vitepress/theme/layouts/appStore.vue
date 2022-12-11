<script setup lang="ts">
import type { AppItemType } from "../../types";
import AppItem from "../components/AppItem.vue";

defineProps<{
  pageInfo: {
    title: string;
    titleTemplate: string;
  };
  apps: AppItemType[];
}>();
</script>

<template>
  <div>
    <div class="root">
      <div class="title">
        <h1>{{ pageInfo.title }}</h1>
        <div class="tip">{{ pageInfo.titleTemplate }}</div>
      </div>
      <div class="content">
        <AppItem v-for="app of apps" :item="app" />
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
