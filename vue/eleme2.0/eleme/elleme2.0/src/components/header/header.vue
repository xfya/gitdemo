<template>
     <div class="header">
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
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
           
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="supports-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon iconfont icon-zuoyoujiantou"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon iconfont icon-zuoyoujiantou"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" class="" width="100%" height="100%">
    </div>
    <transition name="fade">
    <div v-if = "detailShow"  class="detail" @click="hideDetail" transition="fade">
      <div class="detail-wrapper clearFix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item, index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="iconfont icon-cha"></i>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
  import star from '../star/star.vue';
    export default{
         props: {
            seller: {
                type: Object
            }
        },
        data(){
            return{
               detailShow:false 
            }
        },
        methods:{
            showDetail(){
                this.detailShow = true;
            },
             hideDetail() {
        this.detailShow = false;
      }
        },
        created(){
              this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        },
        components:{
            star
        }

    }
</script>

<style>
.header {
    position: relative;
    color: #fff;
    overflow: hidden;
    background: rgba(7,17,27,0.5);
}
.header .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
}
.header .content-wrapper .avatar {
    display: inline-block;
    vertical-align: top;
}.header .content-wrapper .supports-count .count {
    font-size: 10px;
    vertical-align: top;
}
.header .content-wrapper .avatar img {
    border-radius: 2px;
}
.header .content-wrapper .content {
    display: inline-block;
    font-size: 14px;
    margin-left: 16px;
}
.header .content-wrapper .content .title {
    margin: 2px 0 8px 0;
}
.header .content-wrapper .content .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
}
.header .content-wrapper .content .title .brand {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background-size: 30px 18px;
    background-repeat: no-repeat;
}
.header .content-wrapper .content .title .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
}

.header .bulletin-wrapper {
    position: relative;
    background-color: rgba(7,17,27,0.2);
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
}
.header .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
}.header .detail {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7,17,27,0.8);
    -webkit-backdrop-filter: blur(10px);
}.detail-wrapper .detail-main {
    margin-top: 64px;
    padding-bottom: 64px;
}.detail-wrapper .detail-main .title .text {
    padding: 0px 12px;
    font-size: 16px;
    font-weight: 700px;
}
.header .content-wrapper .supports-count {
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    background: rgba(0,0,0,0.2);
    text-align: content;
}
.detail-wrapper {
    width: 100%;
    min-height: 100%;
}.detail-wrapper .detail-main .name {
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700px;
}
.detail-wrapper .detail-main .title .text {
    padding: 0px 12px;
    font-size: 16px;
    font-weight: 700px;
}.detail-wrapper .detail-main .supports {
    width: 80%;
    margin: 22px auto;
}
.detail-wrapper .detail-main .supports .support-item .text {
    line-height: 12px;
    font-size: 12px;
    color: #fff;
}
.detail-wrapper .detail-main .supports .support-item {
    padding: 0 12px;
    font-size: 0px;
    margin-bottom: 12px;
}.header .bulletin-wrapper .icon {
    position: absolute;
    font-size: 20px;
    right: 12px;
    top: 0px;
}
</style>