<script setup lang="ts">
import { ref } from "vue";
import { useData } from "vitepress";
import { BookItemType } from "../../types";
import BookDetail from "../components/BookDetail.vue";
import BookItem from "../components/BookItem.vue";
import Title from "../components/Title.vue";
import books from "../../../book/books";

// defineProps<{ books: BookItemType[]; }>();
const { frontmatter } = useData();
let currentBook = ref<BookItemType>();

function filterCategory(books: BookItemType[]) {
  if (!frontmatter.value.category) return books;
  return books.filter(v => v.category?.includes(frontmatter.value.category));
}
</script>

<template>
  <div>
    <Title v-if="frontmatter.title" :title="frontmatter.title" :subtitle="frontmatter.titleTemplate" />
    <div class="library">
      <BookItem v-for="book of filterCategory(books)" :book="book" v-model:current="currentBook" />
      <BookDetail v-if="currentBook" :book="currentBook" @onClose="() => currentBook = undefined" />
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