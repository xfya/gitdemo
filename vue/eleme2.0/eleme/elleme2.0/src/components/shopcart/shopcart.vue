<template>
<div class="shopCart">
   <div class="content">
       <div class="content-left">
           <div class="logo-wrapper">
                <div class="logo">
                    <i class="iconfont icon-gouwuche"></i>
                </div>
                <div class="num" v-show = "totalCount>0">{{totalCount}}</div>
           </div> 
                <div class="price">￥{{totalPrice}}</div>
                <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
            </div> 
            <div class="content-right">
                    <div class="pay " :class = "payClass">
                   {{payDesc}}
                    </div>
                </div>
            </div>

             <!--购物车 列表 -->
          <div class="shopcart-list">
              <div class="list-header">
                  <h1 class="title">购物车</h1> 
                  <span class="empty">清空</span>
              </div>
              <div class="list-content">
                  <ul>
                      <li class="shopcart-food" v-for="food in selectFoods">>
                          <span class="name">葱花饼</span>
                           <div class="price">
                               <span>￥20</span>
                           </div> 
                             <cartControl :food="food"></cartControl>
                        </li>
                  </ul>
              </div>
          </div>
</div>
</template>


<script>
 import cartControl from '../cartControl/cartControl.vue';
  import BScroll from 'better-scroll';
    export default{
        props:{
             selectFoods: {
                type: Array,
                default() {
                return [{price: 10, count: 2}];
                }
            },
            deliveryPrice: {
                type: Number,
                default:5
            },
            minPrice: {
                type: Number,
                default: 0
            }
        },
          data () {
                return {
                    balls: [{show: false}, {show: false}, {show: false}, {show: false}, {show: false}],
                    dropBalls: [],
                    fold: true
                };
    },
    methods:{
         
    },
    components:{

        cartControl
    },
    computed:{
        totalCount(){
            let  total = 0 ;
            this.selectFoods.forEach((food) => {
               total += food.count;
            });
            return total
        },
        totalPrice(){
             let  count = 0;
              this.selectFoods.forEach((food) => {
                count += food.price * food.count;
                });
            return count
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
      },
      payClass() {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      },
    }
    }
</script>

<style>.shopCart .shopcart-list .list-header {
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7,17,27,0.1);
}.shopCart .shopcart-list .list-header .empty {
    float: right;
    font-size: 12px;
    color: #00a0dc;
}.shopCart .shopcart-list .list-header .title {
    float: left;
    font-size: 14px;
    color: #07111b;
}.shopCart .shopcart-list .list-content {
    padding: 0 18px;
    max-height: 217px;
    overflow: hidden;
    background: #fff;
}.shopCart .shopcart-list .list-content .shopcart-food {
    position: relative;
    padding: 12px 0;
    box-sizing: border-box;
    position: relative;
}.shopCart .shopcart-list .list-content .shopcart-food .name {
    line-height: 24px;
    font-size: 14px;
    color: #07111b;
}.shopCart .shopcart-list .list-content .shopcart-food .price {
    position: absolute;
    right: 90px;
    bottom: 12px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: #f01414;
}.shopCart .shopcart-list .list-content .shopcart-food .name {
    line-height: 24px;
    font-size: 14px;
    color: #07111b;
}
.shopCart {
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 50;
    width: 100%;
    height: 48px;
}
.shopCart .content {
    display: -ms-flexbox;
    display: flex;
    background: #141d27;
}.shopCart .content .content-left .logo-wrapper .num {
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
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
}
.shopCart .content .content-left {
    -ms-flex: 1;
    flex: 1;
}
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
    border-right: 1px solid rgba(255,255,255,0.1);
    font-size: 16px;
    font-weight: 700;
    color: rgba(255,255,255,0.4);
}
.shopCart .content .content-left .desc {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    margin-left: 12px;
    margin-top: 12px;
    color: rgba(255,255,255,0.4);
    font-size: 10px;
}
.shopCart .content .content-right {
    -ms-flex: 0 0 105px;
    flex: 0 0 105px;
    width: 105px;
}.shopCart .content .content-right .pay.not-enough {
    background: #2b333b;
}

.shopCart .content .content-right .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    font-weight: 700;
    background: #2b333b;
}.shopCart .content .content-right .pay.enough {
    background: #00b43c;
    color: #fff;
}
</style>