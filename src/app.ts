import { createApp } from 'vue'
import {
  Locale,
  Tabbar,
  TabbarItem, 
  Button, 
  Toast,
  Image,
  Dialog
} from '@nutui/nutui-taro';
import { createPinia } from 'pinia'
import enUS from '@nutui/nutui-taro/dist/packages/locale/lang/en-US';
import './app.scss'
import { createI18n } from 'vue-i18n'

Locale.use('en-US', enUS);


const pinia = createPinia()
const i18n = createI18n({
  locale:'en-US',
  messages:{
    'en-US':require('./locale/en'),
    'zh-CN':require('./locale/zh')
  }
})

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App
  .use(pinia)
  .use(i18n)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Button)
  .use(Toast)
  .use(Image)

export default App
