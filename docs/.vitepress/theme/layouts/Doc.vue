<template>
  <Layout>
    <template #doc-before>
      <Tag :items="frontmatter.tags" />
    </template>
  </Layout>
</template>

<script setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Tag from "../components/Tag.vue";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();

console.log(frontmatter.value);
</script>