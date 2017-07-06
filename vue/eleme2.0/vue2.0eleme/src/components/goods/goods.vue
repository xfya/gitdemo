<template>
    <div class="good">
    
        <div ref="menuWrapper" class="menu-wrapper">
            <ul >
                <li   @click="selectMenu(index, $event)"  v-for="(item, index) in goods" class="menu-item border-1px" :class="{'current':currentIndex == index}">
                    <span class="text">
                        <span class=" icon" style="display: none;"></span>{{item.name}}
                    </span>
                </li>
                
            </ul>
        </div>
    
        <div ref="foodWrapper" class="foods-wrapper">
            <ul >
                <li v-for="item in goods" class="food-list food-list-hook">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li v-for="food in item.foods" class="food-item">
                            <div class="icon">
                                <img :src="food.icon"  alt="" width="57">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}</span>
                                    <span class="count">好评{{food.rating}}</span>
                                </div>
                                <div class="price">
                                    <span class="now">￥{{food.price}}</span>
                                    <span class="old" style="display: none;">￥￥{{food.price}}</span>
                                </div>
                                <div class="cartControl-wrapper">
                                    <div class="cartControl">
                                      <cartControl :food="food"></cartControl>
                                    </div>
                                </div>
                            </div>
                        </li>
                      
                    </ul>
                </li>
            
            </ul>
        </div>
        <div>

            <!--<shopCart :select-foods="selectFoods"></shopCart>-->
            <shopCart :select-foods="selectFoods" ref="shopCart" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" ></shopCart>
        </div>
    </div>
</template>
<script>
    import data from '../../common/json/data.json';
    import BScroll from 'better-scroll';
    import shopCart from '../shopcart/shopcart.vue';
    import cartControl from '../cartControl/cartControl.vue';
    // import food from '../food/food.vue';
    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                a: "xfa",
                goods: [],
                listHeight: [],
                scrolly: 0,
                selectedFood: {}
            };
        },
        created() {
            this.goods = data.goods;
            // console.log(this.goods)
            // console.log(data)
            this.$nextTick(() => {
                this._initScroll();
                this._calculateHeight();
            });
            // console.log(this.seller)
        },
        methods: {
            _initScroll() {
                this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                    click: true
                });
                this.foodScroll = new BScroll(this.$refs.foodWrapper, {
                    probeType: 3,
                    click: true
                });
            },
            _calculateHeight() {
                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
                let height = 0;
                this.listHeight.push(height);
                for (let i = 0; i < foodList.lenght; i++) {
                    let item = foodList[i];
                    height += item.clientHeight;
                    this.listHeight.push(height)
                }

            },
            selectMenu(index, event) {
                console.log(index)
                let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
                let el = foodList[index];
                this.foodScroll.scrollToElement(el, 300);

            },
            selectFood(food, event) {
                if (!event._constructed) {
                    // 去掉自带click事件的点击
                    return;
                }
                this.selectedFood = food;
                this.$refs.food.show();
            },
            incrementTotal(target) {
                this.$refs.shopCart.drop(target);
            }

        },
        computed: {
            currentIndex() {
                // console.log(this.listHeight)
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
                let  foods = [];
                this.goods.forEach((good) => {
                  good.foods.forEach((food) =>{
                       if (food. count) {
                        foods.push(food);
                    }
                  })
                   
                })

                 return foods;
            }
        },
        components: {
            shopCart,
            cartControl
        }
    }
</script>
<style>
    .shopCart {
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 50;
        width: 100%;
        height: 48px;
    }
    
    .cartControl .cart-count {
        display: inline-block;
        font-size: 10px;
        line-height: 24px;
        width: 12px;
        vertical-align: top;
        padding-top: 6px;
        text-align: center;
        color: #93999f;
    }
    
    .cartControl .cart-decrease,
    .cartControl .cart-add {
        display: inline-block;
        padding: 4px 6px 6px 6px;
    }
    
    .cartControl .cart-count {
        display: inline-block;
        font-size: 10px;
        line-height: 24px;
        width: 12px;
        vertical-align: top;
        padding-top: 6px;
        text-align: center;
        color: #93999f;

    }
    
    .cartControl .cart-add {
        display: inline-block;
        padding: 4px;
        line-height: 20px;
        font-size: 24px;
        vertical-align: top;
        color: #00a0dc;
        margin-top: 5px;
                    border:1px solid #00a0dc;
    border-radius:50%;
    }
    
    * {
        margin: 0;
        padding: 0;
    }
    
    .good .foods-wrapper {
        -ms-flex: 1;
        flex: 1;
    }
    
    .good .foods-wrapper .food-list .title {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: #93999f;
        background: #f3f5f7;
    }
    
    .good .foods-wrapper .food-list .food-item {
        display: -ms-flexbox;
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        position: relative;
    }
    
    .good .foods-wrapper .food-list .food-item .icon {
        -ms-flex: 0 0 57px;
        flex: 0 0 57px;
        margin-right: 10px;
    }
    
    .good .foods-wrapper .food-list .food-item .content {
        -ms-flex: 1;
        flex: 1;
    }
    
    .good .foods-wrapper .food-list .food-item .content .name {
        margin: 2px 0 8px 0;
        font-size: 14px;
        line-height: 14px;
        height: 14px;
        color: #07111b;
    }
    
    .good .foods-wrapper .food-list .food-item .content .desc {
        margin-bottom: 8px;
        line-height: 12px;
    }
    
    good .foods-wrapper .food-list .food-item .content .desc,
    .good .foods-wrapper .food-list .food-item .content .extra {
        font-size: 10px;
        line-height: 10px;
        color: #93999f;
    }
    
    .good .foods-wrapper .food-list .food-item .content .price {
        font-weight: 700px;
        line-height: 24px;
    }
    
    .good .foods-wrapper .food-list .food-item .content .cartControl-wrapper {
        position: absolute;
        right: 0;
        bottom: 12px;
    }
    
    .good {
        display: -ms-flexbox;
        display: flex;
        position: absolute;
        width: 100%;
        top: 134px;
        bottom: 46px;
        overflow: hidden;
    }
    
    .good .menu-wrapper {
        -ms-flex: 0 0 80px;
        flex: 0 0 80px;
        width: 80px;
        background: #f3f5f7;
    }
    
    .good .menu-wrapper ul {
        padding: 0;
    }
    
    .good .menu-wrapper .menu-item {
        display: table;
        width: 56px;
        height: 54px;
        line-height: 14px;
        padding: 0 12px;
    }
    
    .good .menu-wrapper .menu-item .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        position: relative;
        font-size: 12px;
    }
    
    body {
        margin: 0;
    }
    
    .current {
        background: red;
    }

    .cartControl .icon-jian {
    display: inline-block;
    padding: 6px;
    line-height:17px;
    font-size: 24px;
    vertical-align: top;
    color: #00a0dc;
    border:1px solid #00a0dc;
    border-radius:50%;
}
</style>