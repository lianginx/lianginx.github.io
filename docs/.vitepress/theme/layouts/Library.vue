<script setup lang="ts">
import { ref } from "vue";
import type { BookItemType } from "../../types";
import BookDetail from "../components/BookDetail.vue";
import BookItem from "../components/BookItem.vue";

defineProps<{
  books: BookItemType[];
}>();
let currentBook = ref<BookItemType>();
</script>

<template>
  <div>
    <div class="library">
      <BookItem v-for="book of books" :book="book" v-model:current="currentBook" />
    </div>
    <BookDetail v-if="currentBook" :book="currentBook" @onClose="() => currentBook = undefined" />
  </div>
</template>

<style scoped>
.library {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;
  width: 1200px;
  margin: 15px auto;
}
</style>