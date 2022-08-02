import { defineStore } from 'pinia'

export const useTabbarStore = defineStore('tabbar', {
  state: () => {
    return { selected: 0 }
  },
  getters:{
    getSelected(state){
        return state.selected;
    }
  },
  actions: {
    setSelected(index) {
      this.selected=index;
    },
  },
})