import { createI18n } from 'vue-i18n'
const messages = {
  en: {
    msg: {
      test: 'hello'
    }
  },
  zh: {
    msg: {
      test: '你好'
    }
  }
}

const locale = 'en'

const i18n = createI18n({
  // 使用composition api
  legacy: false,
  // 全局使用t函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
