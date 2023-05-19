// vue3中没有过滤器
// 处理时间戳
import dayjs from 'dayjs'

const dataFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseFloat(val)
  }
  return dayjs(val).format(format)
}
/**
 * 全局过滤器
 * https://v3-migration.vuejs.org/zh/breaking-changes/filters.html
 * 
 */
export default app => {
  app.config.globalProperties.$filters = {
    dataFilter
  }
}
