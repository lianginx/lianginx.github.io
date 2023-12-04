<script setup lang="ts">
import type { BookItemType } from '../types'
import IconClose from '../components/icons/IconClose.vue'
import VButton from '../components/VButton.vue'
import BookDouban from './BookDouban.vue'

defineProps<{ book: BookItemType }>()
defineEmits(['onClose'])

function setInfo(book: BookItemType) {
  return [
    { name: '作者', value: book.author?.join('/') },
    { name: '译者', value: book.translator?.join('/') },
    { name: '出版社', value: book.press },
    { name: '出版时间', value: book.published },
    { name: 'ISBN', value: book.ISBN },
    { name: '文件格式', value: book.format?.toUpperCase() },
    { name: '文件大小', value: book.size },
    { name: '更新时间', value: book.updated },
  ].filter(v => v.value)
}
</script>

<template>
  <div class="mask" @click="$emit('onClose')" />
  <div class="box">
    <div class="box-title">
      <span>书籍详情</span>
      <IconClose class="icon-close" @click="$emit('onClose')" />
    </div>
    <div class="book">
      <div class="cover">
        <img :src="book.cover" :alt="book.title">
        <BookDouban v-if="book.doubanLink" :douban-link="book.doubanLink" />
      </div>
      <div class="info">
        <p class="book-title">
          {{ book.title }}
        </p>
        <p class="book-subtitle">
          {{ book.subtitle }}
        </p>
        <div v-for="info in setInfo(book)" :key="info.name">
          <span>{{ info.name }}</span>：<span>{{ info.value }}</span>
        </div>
        <div class="btn-group">
          <VButton v-if="book.doubanLink" text="豆瓣介绍" theme="alt" :link="book.doubanLink" />
          <VButton v-if="book.downloadLink" text="立即下载" theme="brand" :link="book.downloadLink" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$mask-color: rgba(0, 0, 0, 0.3);

.mask {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $mask-color;
}

.box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 90px 30px;
  width: 550px;
  background: var(--vp-c-bg);
}

.box-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #F3F4F6;
  font-weight: bold;
}

.icon-close {
  height: 30px;
  width: 30px;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #9CA3AF;

  &:hover {
    background-color: #F3F4F6;
  }
}

.book {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.cover {
  grid-column: span 1;
  height: 280px;
  width: 140px;

  img {
    margin-bottom: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}

.info {
  grid-column: span 4;
  line-height: 1.8;
}

.book-title {
  font-size: x-large;
  font-weight: bold;
}

.book-subtitle {
  font-size: small;
  font-weight: bold;
  margin-bottom: .75rem;
}

.btn-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .5rem;
  margin-top: 1rem;
}
</style>
