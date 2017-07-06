<template>
<div class="cartControl-wrapper">
    <div class="cartControl">
         <transition name="fade">
        <div class="cart-decrease">
            <transition name="inner">
                 <span class="inner iconfont icon-jian" @click = "decreaseCart" v-show="food.count > 0 ">-</span>
             </transition>
        </div> 
         </transition>
            <span class="cart-count" v-show="food.count > 0 ">  {{food.count}}</span> 
            <span class="iconfont icon-jia cart-add" @click = "addCart">+</span>
            
          </div>
         
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
                    if (!this.food.count) {
                          Vue.set(this.food, 'count', 1);
                    } else {
                            this.food.count++;
               }

            //   this.$emit('increment', event.target); 
          },
           decreaseCart(event) {
                if (!event._constructed) {
                // 去掉自带click事件的点击
                return;
                }
                this.food.count--;
            }
      },
      
    
  }
</script>
<style>
.shopCart .shopcart-list {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    transform: translate3d(0, -100%, 0);
}
.fade-enter-active, .fade-leave-active{
     transition: all 0.5s ease     
}
 
.fade-enter,.fade-leave-active{
      opacity: 0
}


.cartControl {
    font-size: 0;
}.cartControl .cart-decrease, .cartControl .cart-add {
    display: inline-block;
    padding: 4px 6px 6px 6px;
}.cartControl .cart-decrease .inner, .cartControl .cart-add .inner {
    display: inline-block;
    line-height: 24px;
    font-size: 24px;
    vertical-align: top;
    color: #00a0dc;
}.cartControl .cart-count {
    display: inline-block;
    font-size: 10px;
    line-height: 24px;
    width: 12px;
    vertical-align: top;
    padding-top: 6px;
    text-align: center;
    color: #93999f;
}.cartControl .cart-add {
    display: inline-block;
        padding: 4px 6px 6px 6px;
    line-height: 24px;
    font-size: 24px;
    vertical-align: top;
    color: #00a0dc;
}


</style>