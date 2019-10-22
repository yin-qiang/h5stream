// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import LangEn from '../static/lang/en'
import LangZhCHS from '../static/lang/zhchs'
import LangZhCHT from '../static/lang/zhcht'

import 'jquery'
import 'jquery-ui'
/* import ampleadmin */
import './assets/material/bootstrap/dist/css/bootstrap.min.css'
import './assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css'
import './assets/material/css/animate.css'
import './assets/material/css/style.css'
import './assets/material/css/colors/default.css'
// import './assets/material/css/colors/megna-dark.css'
import './assets/plugins/bower_components/jquery/dist/jquery.min'
import './assets/material/bootstrap/dist/js/bootstrap.min'
import './assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min'
import './assets/material/js/jquery.slimscroll'
import './assets/material/js/waves'
import './assets/material/js/custom.min'
import './assets/plugins/bower_components/styleswitcher/jQuery.style.switcher'

import axios from '@/http'
import store from '@/store/store'
import VeeValidate from 'vee-validate'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import UUID from 'vue-uuid';
// 使用vee-validate（会报冲突， 因为elmentui中fields属性已使用）
const config = {
  errorBagName: 'errorBags', // change if property conflicts.
  fieldsBagName: 'fieldBags',
};
Vue.use(VeeValidate, config);
Vue.use(ElementUI)
Vue.use(iView)
Vue.use(UUID)

Vue.prototype.$http = axios
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const bus = new Vue()
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zhchs',
  messages: {
    'en': LangEn,
    'zhchs': LangZhCHS,
    'zhcht': LangZhCHT
  }
})

i18n.locale = 'zhchs';
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>',
  data: {
    bus
  }
})

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: zhengsh 2016-9-5
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
