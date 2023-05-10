import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 道路svgIcon
import installIcons from '@/icons'
// 导入全局样式
import './styles/index.scss'
// 导入路由鉴权
import './permission'
// 国际化
import i18n from '@/i18n'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
