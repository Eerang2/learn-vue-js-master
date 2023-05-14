import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 위 코드를 풀면 아래와 같다
// new Vue({
//   el: '#app',
//   components: {
//     'app': App
//   }
// })
