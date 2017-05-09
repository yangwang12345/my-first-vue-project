<template>
	<div id="a">
    <slot name="mySlot"></slot>
		<div :style="headerBGColor">{{msgfromfather}}</div>
		<button type="button" @click="onClick">open mouse</button>
		<router-link to="/index">{{index}}</router-link>
		<router-link to="/about">{{about}}</router-link>
		<router-link to="{ name: 'user', params: { id: 1 }}">1</router-link>
		<!-- router.push({ name: 'user', params: { id: 1 }}) -->
		<router-link to="/user/:2">2</router-link>
		<transition :name="transitionName">
			<router-view></router-view>
		</transition>
		<button @click="back">back</button>
	</div>
</template>
<script>
  export default {
    name: 'header',
    data: function() {
      return {
        message: 'hello word',
        index: 'index',
        about: 'about',
        transitionName: ''
      }
    },
    props: {
      bgColor: String,
      msgfromfather: String
    },
    methods: {
      onClick () {
        // 第一个参数事件名，第二个事件参数
        this.$emit('child-tell-me-something', this.message)
      },
      back () {
        this.$router.go(-1)
      },
      chilFn (msg){
        console.log(msg)
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    computed:{
      headerBGColor(){
        return {
          'background-color': this.bgColor ? this.bgColor : '#2594e9'
        }
      }  
    },
    beforeCreate: function() {
      console.group('beforeCreate 创建前状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
      console.log("%c%s", "color:red", "message: " + this.message)
    },
    created: function() {
      console.group('created 创建完毕状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
      console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeMount: function() {
      console.group('beforeMount 挂载前状态===============》');
      console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化  
      console.log("%c%s", "color:red", "message: " + this.message); //已被初始化  
    },
    mounted: function() {
      console.group('mounted 挂载结束状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: " + this.message); //已被初始化 
    },
    beforeUpdate: function() {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    updated: function() {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    beforeDestroy: function() {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    destroyed: function() {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message)
    }
  }
</script>
<style>
	
</style>