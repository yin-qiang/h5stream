import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/views/dashboard'
import Liveview from '@/components/views/liveview'
import Sreenshots from '@/components/views/screenshots'
import Playback from '@/components/views/playback'
import SrcMgr from '@/components/views/srcmgr'
import H5S from '@/components/h5s'
import Login from '@/components/login'
import Logout from '@/components/logout'
import store from '@/store/store'
import * as types from '@/store/types'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/app/dashboard'
  },
  {
    path: '/app',
    name: 'H5S',
    component: H5S,
    children: [
      {
        path: '/app/liveview',
        name: 'liveviewRouter',
        component: Liveview
      },
      {
        path: '/app/playback',
        name: 'playbackRouter',
        component: Playback
      },
      {
        path: '/app/screenshots',
        name: 'screenshotsRouter',
        component: Sreenshots
      },
      {
        path: '/app/dashboard',
        name: 'dashboardRouter',
        component: Dashboard
      },
      {
        path: '/app/srcmgr',
        name: 'dashboardRouter',
        component: SrcMgr
      },
      {
        path: '/login',
        name: 'LoginRouter',
        component: Login
      },
      {
        path: '/logout',
        name: 'logoutRouter',
        component: Logout
      }
    ]
  }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('h5stoken')) {
  store.commit(types.LOGIN, window.localStorage.getItem('h5stoken'))
}
if (window.localStorage.getItem('h5slang')) {
  console.log('h5slang', window.localStorage.getItem('h5slang'))
  store.commit(types.LANG, window.localStorage.getItem('h5slang'))
}
if (window.localStorage.getItem('h5rtcsw')) {
  console.log('h5rtcsw', window.localStorage.getItem('h5rtcsw'))
  store.commit(types.RTCSW, window.localStorage.getItem('h5rtcsw'))
}

const Router = new VueRouter({
  routes
});

Router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
})

export default Router;
