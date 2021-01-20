import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//temporario, serve para termos autorizacao com o token do adm para acessar as estatisticas
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Ikx1Y2FzIiwiZW1haWwiOiJsdWNhc0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjExMDE4ODE0LCJleHAiOjE2MTEyNzgwMTR9.7H5hw3bzKzk3A45gCwd8IO2gfFxbXYK8Q7t5zrGMESI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
