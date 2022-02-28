import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.config.productionTip = false
Vue.use(VueCoreVideoPlayer)
new Vue({
  router,
  store,
  vuetify,
  VueCoreVideoPlayer,
  render: h => h(App)
}).$mount('#app')
