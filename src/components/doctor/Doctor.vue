<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12 sm6 md6 lg4 xl3 v-for="schedule of filteredData" v-bind:key="`d${i}`">
      <doctor-card :doctorName="schedule.Nm_Medico" :speciality="schedule.Nm_Especialidade" :schedules="schedule.Atendimento"></doctor-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import specialitiesJson from '../../../data/especialidades.json'
import doctorsJson from '../../../data/medicos.json'
import scheduleJson from '../../../data/agenda.json'
import Card from '../shared/card/Card.vue'

export default {
  components: {
    'doctor-card': Card
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
    clear () {}
  },
  computed: {
    filteredData () {
      let filtered = this.schedules
      return filtered.filter(doctor => doctor.Id_Especial === this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
