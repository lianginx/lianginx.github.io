---
layout: page

title: INX 卷书阁
titleTemplate: &intro 一个人可以被毁灭 但是永远不能够被打败
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
