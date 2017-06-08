// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from "vue-router"
import VueResource from "vue-resource"
import Layout from './components/layout'
import IndexPage from './pages/IndexPage'
import detail from './pages/detail'
import analysis from './pages/detail/analysis'
import count from './pages/detail/count'
import forecast from './pages/detail/forecast'
import publish from './pages/detail/publish'

Vue.use(VRouter)
Vue.use(VueResource)
    // Vue.config.productionTip = false

let router = new VRouter({
    mode: "history",
    routes: [
        { path: "/", component: IndexPage },
        {
            path: "/detail",
            component: detail,
            children: [
                { path: "analysis", component: analysis },
                { path: "count", component: count },
                { path: "forecast", component: forecast },
                { path: "publish", component: publish }
            ]
        }
    ]
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: { Layout, IndexPage }
})