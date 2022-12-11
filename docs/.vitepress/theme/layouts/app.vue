<script setup lang="ts">
import type { AppItemType } from "../../types";
import AppItem from "../components/AppItem.vue";

defineProps<{
  apps: AppItemType[];
}>();
</script>

<template>
  <div>
    <div class="root">
      <div class="title">
        <h1><slot name="title" /></h1>
        <div class="tip"><slot name="title-template" /></div>
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
}

@media screen and (min-width: 960px) {
  .root {
    width: 1200px;
  }
  .content {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .root {
    width: 800px;
  }
  .content {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 640px) {
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: var(--pd-px);
    gap: var(--pd-px);
  }
}
</style>
