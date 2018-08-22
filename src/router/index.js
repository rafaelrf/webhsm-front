import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Doctor from '../components/doctor/Doctor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/doctor',
      name: 'Doctor',
      component: Doctor
    }
  ]
})
