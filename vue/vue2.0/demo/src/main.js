// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from "vue-router"
import Layout from './components/layout'
import IndexPage from './pages/IndexPage'
Vue.use(VRouter)
    // Vue.config.productionTip = false

let router = new VRouter({
    mode: "history",
    routes: [
        { path: "/", component: IndexPage }
    ]
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: { Layout, IndexPage }
})