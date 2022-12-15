<template>
  <Layout>
    <template #doc-before>
      <Tag v-if="frontmatter.tags" :items="frontmatter.tags" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Tag from "../components/Tag.vue";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>
