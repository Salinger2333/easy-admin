<template>
  <div class="chart-container">
    <!-- 累计收益趋势图 -->
    <trend-vue></trend-vue>
    
  </div>
</template>

<script setup>
import trendVue from './components/trend'
import horizontalBarVue from './components/horizontal-bar'
import calendarVue from './components/calendar'
import pieVue from './components/pie'
import wordCloudVue from './components/word-cloud'
import bMapVue from './components/b-map'
import tableSheetVue from './components/table-sheet'
</script>

<style lang="scss" scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
