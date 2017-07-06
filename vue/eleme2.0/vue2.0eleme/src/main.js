import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
Vue.use(VueRouter);
Vue.use(VueResource);

let routes = [

     {path: '/goods', component: goods},
      {path: '/ratings', component: ratings}, 
      {path: '/seller', component: seller}

];

let router = new VueRouter({
  'linkActiveClass': 'active',
  routes

})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
 router.push('/goods');
