<template>
  <div id="app">
    <!-- 头部 -->
      <v-header :seller="seller"></v-header>
      <!--主题部分-->
      <div class="tab border-1px">
           <div class="tab-item"> 
               
                 <router-link v-bind:to="'/goods'">
            商品

                 </router-link>
                 </div>
           <div class="tab-item"> 
               <router-link to="/ratings">ratings</router-link>
           </div>
           <div class="tab-item">
                <router-link to="/seller">
                商家
                </router-link>
           </div>
      </div>
      <router-view :seller="seller" ></router-view>
  </div>
</template>

<script>
    import header from './components/header/header.vue';
    import data from './common/json/data.json';
    import {
        urlParse
    } from './common/js/util.js';
    export default {
        data() {
            return {
                seller: {}
            }
        },
        created() {
            console.log(data.goods)
            this.seller = data.seller
            
        },
        components: {
            "v-header": header
        }
    }
</script>

<style lang="scss">
    .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: 1px solid rgba(7, 17, 27, 0.1);
    }
    
    .tab .tab-item {
        flex: 1;
        text-align: center;
    }
    
    .tab .tab-item a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
    }
    
    .tab .tab-item .active {
        color: rgb(240, 20, 20);
    }
</style>