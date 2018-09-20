import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Doctor from '../components/doctor/Doctor.vue'
import Patient from '../components/patient/Patient.vue'
import Confirmation from '../components/confirmation/Confirmation.vue'
import Payment from '../components/payment/Payment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/doctor/:id/:id2/:id3',
      name: 'doctor',
      component: Doctor
    },
    {
      path: '/patient/:id',
      name: 'patient',
      component: Patient
    },
    {
      path: '/confirmation/',
      name: 'confirmation',
      component: Confirmation
    },
    {
      path: '/payment/',
      name: 'payment',
      component: Payment
    }
  ]
})
