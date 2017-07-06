<template>
  <div id="app">
    <v-header :seller = "seller"></v-header>
    <div class="tab">
      <div class="tab-item">
         <router-link v-bind:to="'/goods'">
          商品

        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
      </div>
      <div class="tab-item"><router-link to="/seller">
          商家
        </router-link></div>


    </div>

       <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import data from './common/json/data.json';

export default {
  name: 'app',
  created(){
    console.log(data) // vue 中 可以直接引入json文件了
    this.seller = data.seller
  },
  data () {
    return {
      seller: {}
    }
  },
  components:{
    'v-header':header
  }
}
</script>

<style >
*{
  margin:0;
  padding:0;
  box-size:border-box;
}
.tab .tab-item {
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
.tab {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /* border: 1px solid rgba(7,17,27,0.1); */
    position: relative;
}
a{
  text-decoration:none;

}
.actively{
  display:block;
  color:red;
  border-bottom:2px solid deeppink;
}
</style>
