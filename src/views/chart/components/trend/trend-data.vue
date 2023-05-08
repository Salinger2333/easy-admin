<template>
  <div class="trend-data-container">
    <!-- 累计盈利 -->
    <div class="title">
      <div class="title-name">Totally Income</div>
      <div class="title-amount">
        &yen;
        <span ref="titleAmountTarget">{{ data.allAmount }}</span>
      </div>
    </div>

    <!-- 今日新增 -->
    <div class="item">
      <div class="item-name item-name-border-1">Today Added Amount</div>
      <div class="item-amount">
        <span class="item-amount-number" ref="todayAddedTarget">{{ data.todayAdded }}</span>
        yuan
      </div>
    </div>
    <!-- 今日支出 -->
    <div class="item">
      <div class="item-name item-name-border-2">Today Expend</div>
      <div class="item-amount">
        <span class="item-amount-number" ref="todayExpendTarget">{{ data.todaySub }}</span>
        yuan
      </div>
    </div>
    <!-- 今日结余 -->
    <div class="item">
      <div class="item-name item-name-border-3">Today Balanced</div>
      <div class="item-amount">
        <span class="item-amount-number" ref="todayBalanceTarget">{{ data.todayAmount }}</span>
        yuan
      </div>
    </div>
  </div>
</template>

<script setup>
import { CountUp } from 'countup.js'
import { onMounted, ref, defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// 本月累计收益（万元）
const titleAmountTarget = ref(null)
// 今日新增收益
const todayAddedTarget = ref(null)
// 今日新增支出
const todayExpendTarget = ref(null)
// 今日结余
const todayBalanceTarget = ref(null)
onMounted(() => {
  const options = {
    // 小数点位
    decimalPlaces: 2,
    // 持续时间
    duration: 1.5
  }
  // 累计回款
  new CountUp(titleAmountTarget.value, props.data.allAmount, options).start()
  // 今日新增
  new CountUp(todayAddedTarget.value, props.data.todayAdded, options).start()
  // 今日支出
  new CountUp(todayExpendTarget.value, props.data.todaySub, options).start()
  // 今日结余
  new CountUp(todayBalanceTarget.value, props.data.todayAmount, options).start()
})
</script>

<style lang="scss" scoped>
.trend-data-container {
  .title {
    padding: 12px 20px;
    background: linear-gradient(to right, #15884c, #69e667);
    border-radius: 5px;
    color: white;
    .title-name {
      font-size: 12px;
      font-weight: bold;
    }
    .title-amount {
      font-size: 24px;
      margin-top: 4px;
    }
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c9c9c9;
    padding: 16px 0;
    color: #666;
    .item-name {
      font-size: 12px;
      padding: 4px 0 4px 8px;
    }
    .item-amount {
      font-size: 12px;
      .item-amount-number {
        color: #333;
        font-weight: bold;
        font-size: 20px;
      }
    }

    .item-name-border-1 {
      border-left: 6px solid #409eff;
    }
    .item-name-border-2 {
      border-left: 6px solid #e6a23c;
    }
    .item-name-border-3 {
      border-left: 6px solid #67c23a;
    }
  }
}
</style>
