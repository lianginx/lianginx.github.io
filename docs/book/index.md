---
layout: page

title: 藏书阁
titleTemplate: &intro 致力于推广各类高品质软件的在线应用商店
description: *intro
---

<script setup lang="ts">
import { useData } from 'vitepress';
import Title from "/.vitepress/theme/components/Title.vue";
import Library from "/.vitepress/theme/layouts/Library.vue";
import books from "./books";

const { frontmatter } = useData();
</script>

<div>
  <Title :title="frontmatter.title" :subtitle="frontmatter.titleTemplate" />
  <Library :books="books"/>
</div>
