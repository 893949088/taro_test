import { defineStore } from 'pinia'

export const useTabbarStore = defineStore('tabbar', {
  state: () => {
    return { lang: localStorage.getItem('lang')||'zh' }
  },
  getters:{
    getLang(state){
        return state.lang;
    }
  },
  actions: {
    setLang(lang) {
      this.lang=lang;
      localStorage.setItem('lang',lang)
    },
  },
})