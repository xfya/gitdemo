<template>
  <div class="hello">
  {{msg}}
  <div   @click = "getParames">click</div>
  <p>{{$route.params}}</p>
  </div>
</template>

<script>
    export default {
        name: 'banana',
        data() {
            return {
                msg: 'this is banana'
            }
        },
        methods: {
            getParames() {
                console.log(this.$route.params)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>