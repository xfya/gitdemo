<template>
    <div class="cartControl">
    <transition name="fade">
        <div class="cart-decrease" >
          <transition name="inner">
          <span @click = "decreaseCart"  v-show="food.count > 0 " class="inner iconfont icon-jian">-</span>
          </transition>
        </div>
    </transition>
     <span class="cart-count" v-show="food.count > 0 ">
     {{food.count}}
    </span>
    <span @click = "addCart" class="iconfont icon-jia cart-add">+</span>
  </div>
</template>

<script>
  import Vue from 'vue';
export default{
 props: {
      food: {
        type: Object
      }
    },
    methods:{
      addCart(event){
           if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
        }
      
        if(!this.food.count){
          Vue.set(this.food, 'count', 1);
        }else{
          this.food.count++
        }
          console.log(this.food.count)
      },
      decreaseCart(event){
         if (!event._constructed) {
          // 去掉自带click事件的点击
          return;
        }
        this.food.count--;
      }
    },
    created(){
      // console.log(this.food)
    }
}
</script>


<style>

</style>