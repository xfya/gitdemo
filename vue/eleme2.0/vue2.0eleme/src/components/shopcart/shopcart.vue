<template>
  <div class = "shopingcat">
  <div>
    <div class="shopCart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class = "{heightLight:totalCount> 0}">
              <i class="iconfont icon-gouwuche"></i>
              </div> <div class="num" v-show = "totalCount> 0" >{{totalCount}}</div>
              </div> <div class="price">￥{{totalPrice}} </div> 
              <div class="desc">另需配送费￥{{deliveryPrice}}元</div></div>
               <div class="content-right"><div class="pay not-enough">
           {{payDesc}}
        </div>
        </div>
        
        </div> 
        
        
        <div class="ball-container"><div><div class="ball" style="display: none;"><div class="inner inner-hook"></div></div></div><div><div class="ball" style="display: none;"><div class="inner inner-hook"></div></div></div><div><div class="ball" style="display: none;"><div class="inner inner-hook"></div></div></div><div><div class="ball" style="display: none;">
            
            <div class="inner inner-hook"></div></div></div><div>
                <div class="ball" style="display: none;">
                    <div class="inner inner-hook">
                        </div>
                        </div>
                        </div>
                        </div>
             <div class="shopcart-list" style="display: none;">
                 <div class="list-header">
                     <h1 class="title">购物车</h1> 
                     <span class="empty">清空</span>
                     </div> <div class="list-content">
                        
                         </div>
                         </div>
                    </div> 
                   
           </div>
  
        
           <div class="shopcart-list">
               <div class="list-header">
                    <h1 class="title">购物车</h1> 
                     <span class="empty">清空</span>
               </div>
               <div class="list-content">
                   <ul>
                       <li class = "food"    v-for = "food in selectFoods">
                           <span>{{food.name}}</span>
                           <span>{{food.price * food.count}}</span>
                           <cartControl :food = food></cartControl>
                       </li>
                   </ul>
                </div>
           </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll';
import cartControl from '../cartControl/cartControl.vue';
    export default {
        name: "shopCart",
        data() {
            return {

            }
        },
        props: {
            selectFoods: {
                type: Array,
                default () {
                    return [{
                        price: 10,
                        count: 10
                    }];
                }
            },
            deliveryPrice: {
                type: Number,
                default: 1
            },
            minPrice: {
                type: Number,
                default: 12
            }
        },
        created() {


        },
        computed: {
            totalPrice() {
                let total = 0;
                this.selectFoods.forEach((food) => {
                    total += food.price * food.count;
                });
                return total;
            },
            totalCount() {
                let count = 0;
                this.selectFoods.forEach((food) => {

                    count += food.count;
                });
                return count;
            },
            payDesc() {
                if (this.totalPrice === 0) {
                    return `￥${this.minPrice}元起送`;
                } else if (this.totalPrice < this.minPrice) {
                    let diff = this.minPrice - this.totalPrice;
                    return `还差￥${diff}元起送`;
                } else {
                    return '去结算';
                }
            }

        },
        methods: {

        },
        components:{
            cartControl
        }
    }
</script>
<style>
    /*@import "shopCart.styl";*/
    
    .shopCart .content .content-left .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: #141d27;
    }
    
    .shopCart .content .content-left .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.4);
    }
    
    .shopCart .content .content-left .desc {
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        margin-left: 12px;
        margin-top: 12px;
        color: rgba(255, 255, 255, 0.4);
        font-size: 10px;
    }
    
    .shopCart .content .content-right {
        -ms-flex: 0 0 105px;
        flex: 0 0 105px;
        width: 105px;
    }
    
    .shopCart .content .content-left .logo-wrapper .logo {
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: 50%;
        background: #2b343c;
    }
    
    .shopCart .content .content-left .logo-wrapper .num {
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 16px;
        font-size: 9px;
        font-weight: 700;
        color: #fff;
        background: #f01414;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    }
    
    .shopCart .content {
        display: -ms-flexbox;
        display: flex;
        background: #141d27;
    }
    
    .shopCart .content .content-right .pay.not-enough {
        background: #2b333b;
    }
    
    .shopCart .content .content-right .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;
        background: #2b333b;
    }
    
    .shopCart .content .content-left {
        -ms-flex: 1;
        flex: 1;
    }
    
    .shopCart .content .content-left .logo-wrapper .logo .icon-gouwuche {
        line-height: 44px;
        font-size: 24px;
        color: #80858a;
    }
    
    .shopCart .content .content-right {
        flex: 0 0 105px;
        width: 105px;
    }
    
    .heightLight {
        background: red!important;
    }
    
    .shopingcat {
        position: relative;
    }
    
    .shop-list {
        width: 100%;
        position: absolute;
        bottom: 90px;
    }
</style>