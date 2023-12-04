<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import type { BookItemType } from '../../../types'
import BookDetail from '../../../components/BookDetail.vue'
import BookItem from '../../../components/BookItem.vue'
import Title from '../../../components/Title.vue'
import books from '../../../book/books'

const { frontmatter } = useData()
const currentBook = ref<BookItemType>()

function filterCategory(books: BookItemType[]) {
  if (!frontmatter.value.category)
    return books
  return books.filter(v => v.category?.includes(frontmatter.value.category))
}
</script>

<template>
  <div>
    <Title v-if="frontmatter.title" :title="frontmatter.title" :subtitle="frontmatter.titleTemplate" />
    <div class="library">
      <BookItem v-for="book of filterCategory(books)" :key="book.title" v-model:current="currentBook" :book="book" />
      <BookDetail v-if="currentBook" :book="currentBook" @on-close="() => currentBook = undefined" />
    </div>
  </div>
</template>

<style scoped>
.library {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5rem;
  row-gap: 2.5rem;
  margin: 1rem 6rem;
}
</style>
