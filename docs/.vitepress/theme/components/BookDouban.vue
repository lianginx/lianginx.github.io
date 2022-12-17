<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  doubanLink: string;
}>();
let isLoadedDouban = ref(false);
</script>

<template>
  <div>
    <div class="box">
      <iframe v-show="isLoadedDouban" class=" douban" :src="doubanLink" title="豆瓣评分" height="1200" width="1200"
        sandbox="" @load="() => isLoadedDouban = true" />
      <p v-if="!isLoadedDouban">正在加载评分……</p>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: relative;
  width: 140px;
  height: 250px;
  overflow: hidden;
  /* border: 1px solid #000; */
}

.douban {
  position: absolute;
  top: -250px;
  right: -470px;
  pointer-events: none;
}

p {
  font-size: small;
}
</style>