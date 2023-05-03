<template>
  <!-- <el-menu
    :default-active="activeMenu"
    :uniqueOpened="true"
    background-color="$store.getters.cssVar.menuBg"
    text-color="$store.getters.cssVar.menuText"
    active-text-color="$store.getters.cssVar.menuActiveText"
    router
    <el-menu
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    background-color="#f6f6f7" -->
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :default-active="activeMenu"
    :uniqueOpened="true"
    active-text-color="#10b981"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    router
  >
    <Sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></Sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from '@/layout/components/Sidebar/SidebarItem.vue'

// console.log($store.getters.cssVar.menuBg)
const router = useRouter()
const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  return generateMenus(fRoutes)
})

/**
 * 默认激活项 刷新页面时,左侧导航栏默认打开激活
 */
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss"></style>
