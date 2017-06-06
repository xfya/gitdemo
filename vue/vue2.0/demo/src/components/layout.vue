<template>
  <div  class = "w">
      <div class="app-header">
          <img src="../assets/logo.png" alt="">
          <div class="login">登录</div>
          <div class="login">关于</div>
          <div class="resgiter">注册</div>
      </div>
     
      <div class="app-content">
          <keep-alive>
                <router-view></router-view>
          </keep-alive>
        
      </div>
       <div class="app-fotter">
app-header
       </div>
 </div> 
</template>

<script>
    export default {

        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    
    body {
        line-height: 1;
    }
    
    ol,
    ul {
        list-style: none;
    }
    
    blockquote,
    q {
        quotes: none;
    }
    
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    .app-header {
        height: 50px;
        line-height: 50px;
        background-color: #f8f8f8;
    }
    
    .w {
        width: 1200px;
        margin: 0 auto;
    }
    
    .app-header>div {
        float: right;
        margin-right: 8px;
    }
    
    .app-header .resgiter {
        float: right;
    }
    
    .app-header img {
        width: 20px;
        margin-left: 20px;
    }
    
    .app-fotter {
        line-height: 50px;
        background-color: #f8f8f8;
        text-align: center;
    }
</style>