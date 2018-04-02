import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

Vue.use(ElementUI);



Vue.use(VueRouter);

import App from './component/App.vue';

import routerConfig from './router/index.js';

import axios from 'axios';
Vue.prototype.$http=axios;
axios.defaults.baseURL = 'http://157.122.54.189:9095';

import api from './js/api-config.js';
Vue.prototype.$api=api;


new Vue({
    el:"#app",
    render:function (createElement) {
        return createElement(App);
      },
      router:new VueRouter(routerConfig)
})