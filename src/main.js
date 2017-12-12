// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import TheFirstScreen from './views/Home/components/TheFirstScreen.vue'
// import TheMember from './views/Home/components/TheMember.vue'
// import TheWorks from './views/Home/components/TheWorks.vue'
// import TheAbout from './views/Home/components/TheAbout.vue'
// import TheFooter from './views/Home/components/TheFooter.vue'

Vue.config.productionTip = false

/* eslint-disable */
const vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
