<template>
    <div class = "good">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for ="(item ,index) in goods" :class="{'current':currentIndex === index}"  class = "menu-item">
                   <span class = "text">
                        <span v-show="item.type>0" class=" icon" >[icon]</span>
                        {{item.name}}
                   </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref = "foodWrapper">
            <ul>
                <li class="food-list "   v-for = "item  in goods">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li class="food-item"  v-for = "food in item.foods">
                                <div class="icon">
                                    <img :src="food.icon" alt="">
                                  </div> 
                                  <div class="content">
                                       <h2 class="name">{{food.name}}</h2> 
                                        <p class="desc">{{food.description}}</p> 
                                        <div class="extra">
                                            <span class="count">月售{{food.sellCount}}</span>
                                            <span class="count">好评{{food.rating}}</span>
                                            <div class="price">
                                                <span class="now">￥{{food.price}}</span>
                                                <span class="old" style="display: none;">￥</span>
                                            </div>
                                            <cartControl :food="food" @increment = "incrementTotal"></cartControl>
                                      </div>  
                                 </div>                             
                        </li>
                    </ul> 
                 </li>
            </ul>
        </div>

        <shopcart :select-foods="selectFoods"   :min-price="seller.minPrice" :delivery-price="seller.deliveryPrice"></shopcart>
    </div>
</template>

<script>
import data from '../../common/json/data.json';
import shopcart from "../shopcart/shopcart.vue";
import cartControl from '../cartControl/cartControl.vue';
  import BScroll from 'better-scroll';
    export default{
        created(){
            // console.log(this.seller)
            // console.log(data)
            this.goods = data.goods;
                    this.$nextTick(() => {
                this._initScroll();
                this._calculateHeight();
            });
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        },
        data(){
            return {
                goods: [],
                listHeight: [],
                scrolly: 0,
                selectedFood: {}
            }
        },
         props: {
            seller: {
                type: Object
            }
         },
         methods:{
              _initScroll() {
                    this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                             click: true
                    });
                    this.foodScroll = new BScroll(this.$refs.foodWrapper, {
                        // ·属性probeType: 3，其作用就是实时获取y值，相当于探针的作用
                            probeType: 3,
                            click: true
                    });
                    this.foodScroll.on('scroll', (pos) => {
                        this.scrolly = Math.abs(Math.round(pos.y));
                    });
            },
             _calculateHeight() {
                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
                let height = 0;
                this.listHeight.push(height);
                for (let i = 0; i < foodList.length; i++) {
                let item = foodList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
                }
             },
             incrementTotal(){

             }

         },
         computed:{
             currentIndex() {
                for (let i = 0; i < this.listHeight.length; i++) {
                let height = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                    if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {
                        return i;
                    }
                }
                return 0;
            },
             selectFoods() {
                    let foods = [];
                    this.goods.forEach((good) => {
                    good.foods.forEach((food) => {
                        if (food.count) {
                        foods.push(food);
                        }
                    });
                    });
                    return foods;
                }
         
         },
         components:{
             shopcart,
             cartControl
         }

    }
</script>

<style>.good {
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
    margin-top: 10px;
}.good .foods-wrapper .food-list .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: #93999f;
    background: #f3f5f7;
}.good .foods-wrapper .food-list .food-item .icon {
    -ms-flex: 0 0 57px;
    flex: 0 0 57px;
    margin-right: 10px;
}
    .good .menu-wrapper {
    
    -ms-flex: 0 0 80px;
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
}
.good .foods-wrapper {
    -ms-flex: 1;
    flex: 1;
}
.detail-wrapper .detail-main .supports .support-item {
    padding: 0 12px;
    font-size: 0px;
    margin-bottom: 12px;
}
.good .menu-wrapper .menu-item .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    position: relative;
    font-size: 12px;
}

.good .menu-wrapper .menu-item.current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #f5f5f5;
    font-weight: 700;
}

.good .menu-wrapper .menu-item {
    display: table;
    width: 56px;
    height: 54px;
    line-height: 14px;
    padding: 0 12px;
}.good .foods-wrapper .food-list .food-item .icon {
    -ms-flex: 0 0 57px;
    flex: 0 0 57px;
    margin-right: 10px;
}
.good .foods-wrapper .food-list .food-item .content .name {
    margin: 2px 0 8px 0;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    color: #07111b;
}.good .foods-wrapper .food-list .food-item .content .desc {
    margin-bottom: 8px;
    line-height: 12px;
}

li{
    list-style:none;
}

.good .foods-wrapper .food-list .food-item .content .desc, .good .foods-wrapper .food-list .food-item .content .extra {
    font-size: 10px;
    line-height: 10px;
    color: #93999f;
}.good .foods-wrapper .food-list .food-item .content .price .now {
    margin-right: 8px;
    font-size: 14px;
    color: #f01414;
}.good .foods-wrapper .food-list .food-item {
    display: -ms-flexbox;
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    position: relative;
}.good .foods-wrapper .food-list .food-item .content {
    -ms-flex: 1;
    flex: 1;
}.good .foods-wrapper .food-list .food-item .content .name {
    margin: 2px 0 8px 0;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    color: #07111b;
}.good .foods-wrapper .food-list .food-item .content .desc {
    margin-bottom: 8px;
    line-height: 12px;
}.good .foods-wrapper .food-list .food-item .icon {
    -ms-flex: 0 0 57px;
    flex: 0 0 57px;
    margin-right: 10px;
}.good .foods-wrapper .food-list .food-item {
    display: -ms-flexbox;
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    position: relative;
}.good .foods-wrapper .food-list .food-item .content .price .now {
    margin-right: 8px;
    font-size: 14px;
    color: #f01414;
}.good .foods-wrapper .food-list .food-item .content .price {
    font-weight: 700px;
    line-height: 24px;
}.good .foods-wrapper .food-list .food-item:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid rgba(7,17,27,0.1);
    width: 100%;
    content: '';
}.good .foods-wrapper .food-list .food-item .content .cartControl-wrapper {
    position: absolute;
    right: 0;
    bottom: 12px;
}
</style>