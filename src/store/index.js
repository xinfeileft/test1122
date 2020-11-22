import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 100,
    arr: [12, 52, 14, 85, 62, 18,110, 54,20,77],
    students:[
      { id: 110, name: "why", age: 18 },
      { id: 111, name: "why1", age: 17 },
      { id: 112, name: "why2", age: 22 },
      { id: 113, name: "why3", age: 11 },
      { id: 114, name: "why4", age: 21 },
    ],
    info: {
      name: "kobo",
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      state.counter += count
    },
    addStu(state, stu) {
      state.students.push(stu)
    },
    updateNewInfo(state) {
      state.info.name = "coderwhy"
      // Vue.set(state.info,'address','洛杉矶')//响应式
      //delete state.info.age 不是响应式
    }            //Vue.delete(state.info,'age')//响应式
  },
  actions: {
    //context：上下文
    AupdateNewInfo(context, payload) {
      //  setTimeout(()=>{
      //      context.commit('updateNewInfo');
      //      console.log(payload.message);
      //      payload.success()

      //  },1500)   
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('updateNewInfo');
          console.log(payload);
          resolve('11111')
        }, 1000)
      })
    }
  },
  getters: {
    more17Arr(state) {
      return state.arr.filter(n => n > 17);
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(s => s.age >= age)
      }
    },
  },
  modules: {
  }
})
