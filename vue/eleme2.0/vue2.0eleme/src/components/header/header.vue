<template>  
    <header class="header">

      <div class="content-wrapper">
              <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
            <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
            </div>
            <div class="description">
       {{seller.description}}
      </div>
      <div class="support">
          <span class="icon decrease">
              </span> 
              <span class="text">{{seller.supports[0].description}}</span>
               <span  @click="showDetail">
                   点击查看更多优惠
                      <i class="iconfont icon-cha"></i>
                </span>
        </div>
             
        </div>
      </div>
      </div>
      <!--detail -->
      <div  @click="hideDetail" v-show="detailShow"  class="detail">
          <div class="detail-wrapper clearFix">
              <div class="detail-main">
                  <h1 class="name">{{seller.name}}</h1>
                  <star :size="48" :score="seller.score"></star>
            
                            <div class="title"><div class="line"></div> 
                            <div class="text">优惠信息</div> 
                            <div class="line"></div>
                            </div>
                             <ul class="supports">
                                 <li v-for = "(item ,index) in  seller.supports"   class="support-item">
                                     <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                                      <span class="text">{{seller.supports[index].description}}</span>
                                   </li>  
                                </ul>
                                             <div class="title">
                                                 <div class="line"></div>
                                                  <div class="text">商家公告</div>
                                                   <div class="line"></div></div>
                                                    <div class="bulletin"><p class="content">{{seller.bulletin}}</p>
                                                    </div>
                                                    </div>
          </div>

      </div>
    </header>
</template>

<script>
    import star from '../star/star.vue';

    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                detailShow: false
            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        },
        methods: {

            showDetail() {
                this.detailShow = true;
            },
            hideDetail() {

                this.detailShow = false;
            }
        },
        components: {
            star
        }
    }
</script>

<style>
    .header {
        position: relative;
        color: #fff;
        overflow: hidden;
        background: rgba(7, 17, 27, 0.5);
    }
    
    .content-wrapper {
        position: relative;
        padding: 24px 12px 18px 24px;
        font-size: 12px;
    }
    
    .avatar {
        vertical-align: top;
        float: left;
    }
    
    .content-wrapper img {
        border-radius: 2px;
        padding-right: 5px;
    }
    
    .header .detail {
        position: fixed;
        z-index: 100;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: rgba(7, 17, 27, 0.8);
    }
    
    .clearFix {
        display: inline-block;
    }
    
    .clearFix {
        display: inline-block;
    }
    
    .detail-wrapper {
        width: 100%;
        min-height: 100%;
    }
    
    .detail-wrapper .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;
    }
    
    .detail-wrapper .detail-main .star-wrapper {
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
    }
    
    .star .star-item {
        display: inline-block;
        background-repeat: no-repeat;
    }
    
    .detail-wrapper .detail-main .title {
        width: 80%;
        display: -ms-flexbox;
        display: flex;
        margin: 28px auto 0 auto;
    }
    
    .detail-wrapper .detail-main .title .line {
        -ms-flex: 1;
        flex: 1;
        position: relative;
        top: -6px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .detail-wrapper .detail-main .title .text {
        padding: 0px 12px;
        font-size: 16px;
        font-weight: 700px;
    }
    
    .detail-wrapper .detail-main .bulletin {
        width: 80%;
        height: 200px;
        margin: 22px auto;
    }
    
    .detail-wrapper .detail-main .supports {
        width: 80%;
        margin: 22px auto;
    }
    
    .detail-wrapper .name {
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        font-weight: 700px;
    }
    
    .detail-wrapper .star-wrapper {
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
    }
    
    .star {
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
    }
    
    .star .star-item.star-48 .star-item.off {
        background: yellow;
    }
</style>