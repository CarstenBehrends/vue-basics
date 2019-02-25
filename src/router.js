import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demos from './views/Demos.vue'
import NotFound from './views/NotFound.vue'
import log from './utils/log'
const _log = log(true,'router');
Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
      meta:{
        public:true
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        public:true
      }
    },
    {
      path: '/demos',
      name: 'demos',
      component: Demos
    }
  ]
});

router.beforeEach((to, from, next) => {
  
  _log('to',to);
  _log('from',from);
  
  // const isPublic = to.matched.some(record => record.meta.public)
  // if (!isPublic) {
  //   return next({
  //     path:'/',
  //     query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
  //   });
  // }
  next();
})

