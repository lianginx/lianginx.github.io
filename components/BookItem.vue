<script setup lang="ts">
import type { BookItemType } from '../types'
import IconDownload from './icons/IconDownload.vue'
import IconDouban from './icons/IconDouban.vue'

defineProps<{ book: BookItemType }>()
defineEmits<{ (e: 'update:current', val: BookItemType) }>()
</script>

<template>
  <div>
    <div class="book">
      <div class="cover">
        <div class="cover-img" @click="() => $emit('update:current', book)">
          <img :src="book.cover" :alt="book.title">
        </div>
      </div>
      <div class="title hover" @click="() => $emit('update:current', book)">
        {{ book.title }}
      </div>
      <div class=" content">
        <span v-for="person of book.author" :key="person" class="author">{{ person }}</span>
        <div>
          <a class="hover" :href="book.doubanLink" target="_blank">
            <IconDouban class="dl-icon" />
          </a>
          <a v-if="book.downloadLink" class="hover" :href="book.downloadLink" target="_blank">
            <IconDownload class="dl-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 300px;
}

.cover .cover-img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 4px;

  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
}

.cover-img img {
  border-radius: 4px;
  background: #fff;
  transform-origin: 0 50%;
  transform: rotateY(0);
  transition: all 0.45s ease;
}

.cover:hover {
  box-shadow: 0 2px 4px 0 rgba(#000, 0.25), 0 9px 20px 0 rgba(#000, 0.45);
}

.cover:hover img {
  transform: rotateY(-25deg);
  box-shadow: 1px 1px 5px 5px rgba(#000, 0.2);
}
</style>

<style scoped>
/* 封面拟真 */
.cover-img {
  position: relative;
  z-index: 0;
}

.cover-img::before {
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: .25rem;
  background: linear-gradient(to right,
      hsla(0, 0%, 0%, 0.25) 1.4%,
      hsla(0, 0%, 0%, 0) 2.2%,
      hsla(0, 0%, 0%, 0.19) 4%,
      hsla(0, 0%, 0%, 0.19) 4.3%,
      hsla(0, 0%, 0%, 0.1) 5%,
      hsla(0, 0%, 0%, 0) 40%);
  backface-visibility: hidden;
  z-index: 1;
}
</style>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin-top: 0.75rem;
  font-size: small;
  font-weight: bold;
  line-height: 1;
  cursor: pointer;
}

.author {
  font-size: x-small;
}

.dl-icon {
  display: inline;
  margin-left: 0.5rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  visibility: hidden;
}

.book:hover .dl-icon {
  visibility: unset;
}

.hover:hover {
  color: var(--vp-c-brand);
  stroke: var(--vp-c-brand);
}
</style>
