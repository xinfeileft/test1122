<template>
  <div class="hello">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
      <button @click="add">增加1</button>&nbsp; &nbsp;&nbsp;
      <button @click="sub">减小1</button> 
      <h2>{{this.$store.getters.more17Stu}}</h2>
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
      add(){
        this.$store.state.counter++
      },
      sub(){
        this.$store.state.counter--
      },
       
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
