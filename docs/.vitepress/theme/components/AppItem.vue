<script setup lang="ts">
import type { AppItemType } from "../../types";
import { withBase } from "vitepress";

defineProps<{
  item: AppItemType;
}>();
</script>

<template>
  <div>
    <div class="root">
      <a :href="item.link" target="_blank"
        ><img
          class="icon"
          :src="withBase(`/img/app-icon/${item.name.replace(' ', '-')}.png`)"
          :alt="item.name"
      /></a>
      <div class="info">
        <span>{{ item.updated }}</span> | <span>{{ item.category }}</span>
      </div>
      <a class="name" :href="item.link" target="_blank">{{ item.name }}</a>
      <div class="intro">{{ item.intro }}</div>
      <div class="tags">
        <div class="tag" v-for="(value, key) in item.chip">
          {{ value }}
        </div>
        <div
          class="tag"
          v-for="(value, key) in { charge: item.charge, size: item.size }"
        >
          <div v-if="key === 'size'">{{ value }}</div>
          <div v-if="key === 'charge'">{{ value }}</div>
        </div>
        <div class="tag" v-for="(value, key) in item.tags">
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  font-size: x-small;
  height: 100%;
}

.icon {
  transition: all 0.3s ease;
  margin-bottom: 10px;
}
.icon:hover {
  transform: scale(1.05);
}

.name {
  font-weight: bold;
  font-size: large;
  line-height: 1.5;
  margin: 5px 0;
  word-break: break-all;
}
.name:hover {
  color: var(--vp-c-brand);
}

.intro {
  margin-bottom: 10px;
  font-size: small;
  line-height: 1.5;
  word-break: break-all;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
}
.tag {
  padding: 0 4px;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-code);
  border-radius: 4px;
  margin: 0 6px 6px 0;
  line-height: 1.5;
  cursor: default;
}
.tag:hover {
  background-color: rgba(66, 184, 131, 0.1);
  color: var(--vp-c-brand);
}
</style>
