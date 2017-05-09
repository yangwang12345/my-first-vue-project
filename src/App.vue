<template>
<div>
<!-- template要有一个父集的包裹，否则报错 -->
  <v-header ref="chil" msgfromfather="you die" v-on:child-tell-me-something='listenToMyBoy'>
    <p slot="mySlot">父组件中自定义的内容插入到子组件所提供的匿名/具名插槽当中</p>
  </v-header>
  <button @click="parentcall">click ref</button>
  <p>child tell me: {{childWolds}}</p>
  <h1>{{title}}</h1>
  <input v-focus type="text" v-model="newItem" @keyup.enter="addNew()">
  <ul>
    <li v-for="item in items" v-bind:class="{finished:item.isFinished}" @click="toggleClass(item)">{{item.label}}</li>
  </ul>
  <div id="logo">我是logo</div>
</div>
</template>

<script>
import VHeader from './components/header'
import Store from './store'
export default {
  name:'app',
  data () {
    return {
      title: "this is a todolist",
      items: Store.fetch(),
      newItem:"",
      childWolds:''
    }
  },
  // 驼峰式转成加"-"
  components:{ VHeader },
  watch:{
    items: {
      // hanller值改变之后执行
      handler: function(items) { 
        Store.save(items)
      },
      deep: true
      // 深层复制，items多层次取不到值
    }
  },
  directives: {
    focus: {
      inserted (el,binding,vnode,oldVnode) {
        // console.log(el,binding,vnode,oldVnode)
        el.focus()
      }
    }
  },
  methods: {
    toggleClass (item) {
      item.isFinished = !item.isFinished
    },
    addNew (){
      this.items.push({
        label:this.newItem,
        isFinished: false
      })
      this.newItem="";
    },
    listenToMyBoy (msg){
      this.childWolds=msg
    },
    parentcall (){
      this.$refs.chil.chilFn('我是父元素传过来的')
    }
  }
}
</script>

<style lang="stylus">
font-size = 14px

body
  font font-size Arial, sans-seri


#logo
  position: absolute
  top: 50%
  left: 50%
  width: 150px
  height: 80px
  margin-left: -(@width / 2)
  margin-top: -(@height / 2)
</style>
