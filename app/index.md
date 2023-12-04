---
layout: page

title: INX 应用商店
titleTemplate: &intro 致力于推广各类高品质软件的在线应用商店
description: *intro
---

<script setup lang="ts">
import { useData } from 'vitepress';
import Title from "../components/Title.vue";
import AppStore from "../.vitepress/theme/layouts/AppStore.vue";
import apps from "./apps";

const { frontmatter } = useData();
</script>

<Title :title="frontmatter.title" :subtitle="frontmatter.titleTemplate" />
<AppStore :apps="apps" />
