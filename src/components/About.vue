<template>
  <div class="a">
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'about',
  //先注册
  data () {
    return {
      msg: 'about',
      name:''
    }
  },
  mounted (){
    var _this=this;
      axios.get('http://localhost:3000/static/data/data.json')
        .then(response => {
          _this.name=response.data.name;
        })
        .catch(error => {
          console.log(error);
        }); 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
