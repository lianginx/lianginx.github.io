<script setup lang="ts">
import IconClose from "../components/icons/IconClose.vue";
import type { BookItemType } from "../../types";
import { ref, onMounted } from "vue";

const props = defineProps<{
  book: BookItemType;
}>();
defineEmits(['onClose']);
let isLoadedDouban = ref(false);
</script>

<template>
  <div class="mask" @click="$emit('onClose')"></div>
  <div class=" box">
    <div class="box-title">
      <span>书籍详情</span>
      <IconClose class="icon-close" @click="$emit('onClose')" />
    </div>
    <div class="book">
      <div class="cover">
        <img :src="book.cover" :alt="book.title">
      </div>
      <div class="info">
        内容区
        <!-- <div v-for="info in book">{{ info }}</div> -->
      </div>
      <div class="douban-box">
        <iframe v-show="isLoadedDouban" class=" douban" :src="book.doubanLink" title="豆瓣评分" height="410" width="1200"
          sandbox="" @load="() => isLoadedDouban = true"></iframe>
        <p v-if="!isLoadedDouban">正在加载评分……</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.douban-box {
  /* border: 1px solid #000; */
  scroll-behavior: smooth;
  position: relative;
  width: 160px;
  height: 160px;
  overflow: hidden;
}

.douban-box p {
  margin: 0 1rem;
  font-size: small;
}

.douban {
  position: absolute;
  top: -230px;
  right: -460px;
  pointer-events: none;
}
</style>
<style scoped>
.show {
  visibility: hidden;
}

.mask {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.box {
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 25px 30px;
  border-radius: 10px 10px 0 0;
  height: 85%;
  width: 50%;
  background: #fff;
}

.box-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #F3F4F6;
  font-weight: bold;
}

.icon-close {
  height: 30px;
  width: 30px;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #9CA3AF;
}

.icon-close:hover {
  background-color: #F3F4F6;
}

.book {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.cover {
  grid-column: span 1;
  height: 280px;
  width: 140px;
}

.cover img {
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.info {
  grid-column: span 2;
}
</style>