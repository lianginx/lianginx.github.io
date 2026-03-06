<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import TagGroup from './components/TagGroup.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <TagGroup />
    </template>
  </Layout>
</template>
