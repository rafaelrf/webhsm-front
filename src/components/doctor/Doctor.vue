<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12 sm6 md6 lg4 xl3 v-for="schedule of filteredData" v-bind:key="`d${schedule}`">
      <doctor-card :id="schedule.id_agenda" :doctorName="schedule.nm_medico" :speciality="schedule.nm_especialidade" :room="schedule.Consultorio" :schedules="schedule.AtendimentoI"></doctor-card>
    </v-flex>
  </v-layout>
  <v-btn @click="clear" href="javascript:history.go(-1)" color="darkgray">Voltar</v-btn>
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
    clear () {
      this.$router.go(1)
    }
  },
  computed: {
    filteredData () {
      let filtered = this.schedules
      return filtered.filter(doctor => doctor.Id_Especialidade === this.$route.params.id)
        .filter(doctor => doctor.Id_Medico === this.$route.params.id2)
        // .filter(doctor => doctor.id_dia === this.$route.params.id3)
    }
  }
}
</script>

<style>

</style>
