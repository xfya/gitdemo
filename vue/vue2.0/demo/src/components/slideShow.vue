<template>
<div class="slide-show" >
    <div class="slide-img">
        <a :href="slides[nowIndex].href">
            <img :src="slides[nowIndex].src" alt="">
       </a>
        <h2>{{ slides[nowIndex].title }}</h2>
          <ul class="slide-pages">
              <li @click = "goto(prev)">&lt;</li>
              <li v-for = "(item ,index)  in slides" @click ="goto(index)">
             
                 <a :class = "{on:index == nowIndex}" href="#">  {{index + 1}}</a>
              </li>
              <li  @click = "goto(next)">&gt;</li>
          </ul>
    </div>
</div>
</template>

<script>
    export default {
        props: {
            slides: {
                type: Array,
                default: []
            },
            inv: {
                type: Number,
                default: 2000
            }
        },
        data() {
            return {
                nowIndex: 1,
                title: 'test'
            }
        },
        mounted() {
            console.log(this.slides)
            this.renInv()
        },
        methods: {
            goto(index) {
                this.nowIndex = index
            },
            renInv() {
                this.invId = setInterval(() => {
                    this.goto(this.next)
                }, this.inv)

            },
            clarInv() {
                clearInterval(this.invId)
            }
        },
        computed: {
            prev() {
                if (this.nowIndex === 0) {
                    return this.slides.length - 1
                } else {
                    return this.nowIndex - 1
                }

            },
            next() {
                if (this.nowIndex === this.slides.length - 1) {
                    return 0
                } else {
                    return this.nowIndex + 1
                }

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    .slide-trans-enter-active {
        transition: all .5s;
    }
    
    .slide-trans-enter {
        transform: translateX(900px);
    }
    
    .slide-trans-old-leave-active {
        transition: all .5s;
        transform: translateX(-900px);
    }
    
    .slide-show {
        position: relative;
        margin: 15px 15px 15px 0;
        width: 900px;
        height: 500px;
        overflow: hidden;
    }
    
    .slide-show h2 {
        position: absolute;
        width: 100%;
        height: 100%;
        color: #fff;
        background: #000;
        opacity: .5;
        bottom: 0;
        height: 30px;
        text-align: left;
        padding-left: 15px;
    }
    
    .slide-img {
        width: 100%;
    }
    
    .slide-img img {
        width: 100%;
        position: absolute;
        top: 0;
    }
    
    .slide-pages {
        position: absolute;
        bottom: 10px;
        right: 15px;
    }
    
    .slide-pages li {
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        color: #fff;
    }
    
    .slide-pages li .on {
        text-decoration: underline;
        color: red;
    }
</style>