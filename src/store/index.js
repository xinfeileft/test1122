import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:100,
    stu: [
      { name: '小华', sex: '男', age: 19 },
      { name: '小红', sex: '女', age: 18 },
      { name: '小淘气', sex: '男', age: 15 },
      { name: '小明', sex: '男', age: 20 },
    ]
  },
  mutations: {
  },
  actions: {
       
  },
  getters:{
       more17Stu() {
         return this.stu.age.filter(age => age > 17)
    }
  },
  modules: {
  }
})
