<template>
  <!-- element icon -->
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <!-- not element icon  -->
  <svg-icon v-else :icon="icon"> </svg-icon>
  <!-- text -->
  <!-- 以路由表的title对应国际化的key值得到真正的标题 -->
  <span>{{  generateTitle(title) }}</span>
</template>

<script setup>
// 生成国际化的title
import { generateTitle } from '@/utils/i18n'
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss"></style>
