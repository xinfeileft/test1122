<template>
  <div class="hello">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
      <button @click="addition">增加1</button>&nbsp; &nbsp;&nbsp;
      <button @click="subtraction">减小1</button> 
      <button @click="addCount(5)">+5</button>
      <button @click="addCount(10)">+10</button>


    <h2>数组中大于17的元素：</h2>
      <h2>{{ $store.getters.more17Arr}}</h2>
    <h2>年龄大于17的学生：</h2>
      <h2>{{ $store.getters.more20stu}}</h2>
    <h2>年龄大于17的学生有几条：</h2> 
      <h2>{{ $store.getters.more20stuLength}}</h2>
      <button @click="addStudent">添加学生</button>

<h2> ----------app中info的内容是否是响应式的------------</h2>
      <h2>{{$store.state.info}}</h2>
      <button @click="updateInfo">修改姓名信息（将kobo改成coderwhy）</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      message:'你好厉害，第一个最新的cli创建的项目！'
    }
  },
  methods:{
      addition(){
       this.$store.commit('increment')
     },
     subtraction(){
       this.$store.commit('decrement')
     },
     addCount(count){
       this.$store.commit('incrementCount',count)
     },
     addStudent(){
       const stu={id:115,name:'why5',age:30}
       this.$store.commit('addStu',stu)
     },
     updateInfo(){
       //this.$store.commit('updateNewInfo') //matutions中用

      //  this.$store.dispatch('AupdateNewInfo', {
      //    message:"我是携带的信息",
      //    success:()=>{
      //     console.log('操作完成');
      // }
       //})

       this.$store.dispatch('AupdateNewInfo','这是携带的信息')
       .then(res=>{
         console.log('完成');
         console.log(res);
       })
     }
       
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
