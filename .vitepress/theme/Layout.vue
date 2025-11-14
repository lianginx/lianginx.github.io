<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <TagGroup v-if="frontmatter.tags" :items="frontmatter.tags" />
    </template>
  </Layout>
</template>
