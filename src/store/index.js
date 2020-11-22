import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:100,
    stu: [12,52,14,85,62,110,54]
  },
  mutations: {
  },
  actions: {
       
  },
  getters:{
       more17Stu(state) {
         return  state.stu.filter(s=>s.age>17);
    }
  },
  modules: {
  }
})
