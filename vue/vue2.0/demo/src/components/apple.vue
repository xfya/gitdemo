<template>
  <div class="hello">
  {{msg}}
<br>
  <router-link :to='{path:"apple/red"}'>apple-red</router-link>
  <p>
      
      <router-view></router-view>
      
      </p>
  </div>
</template>

<script>
    export default {
        name: 'apple',
        data() {
            return {
                msg: 'this is apple'
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