<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12 sm6 md6 lg4 xl3 v-for="schedule of filteredData" v-bind:key="`d${schedule}`">
      <doctor-card :doctorName="schedule.Nm_Medico" :speciality="schedule.Nm_Especialidade" :schedules="schedule.Atendimento"></doctor-card>
    </v-flex>
  </v-layout>

  <router-link :disabled="!valid" :to="{name:'doctor', params: {id: speciality,id2: doctor} }">
    <v-btn :disabled="!valid" @click="submit">
      Confirmar
    </v-btn>
  </router-link>

  <v-btn @click="clear">Cancelar</v-btn>
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
    valid: false,
    speciality: {},
    specialities: specialitiesJson,
    doctor: {},
    doctors: doctorsJson,
    schedule: {},
    schedules: scheduleJson
  }),
  methods: {
    submit () {},
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
