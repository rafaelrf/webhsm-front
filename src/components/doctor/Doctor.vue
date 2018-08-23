<template>
<v-container fluid grid-list-xl>
  <v-layout row justify-center>
    <doctor-card :doctorName="" :speciality="">
    </doctor-card>
  </v-layout>
  <v-layout row align-end justify-end>
    <v-btn color="primary">Confirmar</v-btn>
    <v-btn @click="clear" color="primary">Cancelar</v-btn>
  </v-layout>
</v-container>
</template>

<script>

import specialitiesJson from '../../../data/especialidades.json'
import doctorsJson from '../../../data/medicos.json'
import scheduleJson from '../../../data/agenda.json'

import DoctorCard from './components/shared/doctorPane/DoctorPane.vue'

export default {
  components: {
    'doctor-card': DoctorPane
  },

  data: () => ({
    value: '',
    speciality: {},
    specialities: specialitiesJson,
    doctor: {},
    doctors: doctorsJson,
    schedule: {},
    schedules: scheduleJson
  }),
  methods: {
    // submit () {
    //   if (this.$refs.form.validate()) {
    //     // Native form submission is not yet supported
    //     this.$http.post('/api/submit', {
    //       name: this.name,
    //       email: this.email,
    //       select: this.select
    //     })
    //   }
    // },
    clear () {
      console.log(filteredData.Id_medico);
      console.log(filteredData.id_especialidade);
      console.log(filteredData.Id_medico);
    }
  },
  computed: {
    filteredData () {
      let filtered = this.schedules
      return filtered.filter(doctor => doctor.Id_medico === '1210')
    }
  }
}
</script>

<style>
</style>
