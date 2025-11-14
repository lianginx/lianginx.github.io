<script lang="ts" setup>
import { useData } from 'vitepress'

defineProps<{
  photoGroup: any[]
}>()
const { frontmatter } = useData()
</script>

<template>
  <div class="photo-group">
    <img
      v-for="photo, index in frontmatter.photos" :key="index" class="photo" :src="photo.url"
      :alt="`拍摄于${photo.creation}${photo.location}`"
    >
  </div>
</template>

<style scoped>
.photo-group {
  width: 1100px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap:4px;
}

.photo {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
}

.photo:hover {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}
</style>
