import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Doctor from '../components/doctor/Doctor.vue'
// import Patient from '../components/patient/Patient.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/doctor/:id/:id2',
      name: 'doctor',
      component: Doctor
    }
    // {
    //   path: '/patient',
    //   name: 'Patient',
    //   component: Patient
    // }
  ]
})
