<template>
  <div class="header-search" :class="{ show: isShow }">
    <svg-icon class-name="search-icon" icon="search" @click.stop="onShowClick">
    </svg-icon>
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in 5"
        :key="option"
        :label="option"
        :value="option"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { filterRoutes, generateMenus } from '@/utils/route'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'

// 数据源
const router = useRouter()
const searchPool = computed(() => {
  const routes = filterRoutes(router.getRoutes())
  console.log(generateMenus(filterRoutes))
  return generateMenus(routes)
})

// 使用fuse进行模糊搜索
const fuse = new Fuse(searchPool, {
  // 是否按优先级进行排序
  shouldSort: true,
  // 匹配长度超过这个值的才会被认为是匹配的
  minMatchCharLength: 1,
  // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
  // name：搜索的键
  // weight：对应的权重
  keys: [
    {
      name: 'title',
      weight: 0.7
    },
    {
      name: 'path',
      weight: 0.3
    }
  ]
})

// 控制search展示
const isShow = ref(false)
const onShowClick = () => {
  isShow.value = !isShow.value
}

// search 相关
const search = ref('')
// sousuo
const querySearch = () => {
  console.log('querySerach')
}
// 选中option的回调
const onSelectChange = () => {
  console.log('onSelectChange')
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
