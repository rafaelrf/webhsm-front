<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12 sm6 md6 lg4 xl3 v-for="schedule of filteredData" v-bind:key="`d${i}`">
      <v-card  color="primary">
        <v-container grid-list-xs text-xs-center>
          <v-layout row wrap justify-center align-center>
            <v-flex xs0 sm3 md3 lg3 xl3>
              <v-card-media  src="https://via.placeholder.com/100x100" contain height="100 px">
              </v-card-media>
            </v-flex>
            <v-flex xs12 sm9 md9 lg9 xl9>
              <v-card-title>
                {{schedule.Id_Especial}} Especialidades
              </v-card-title>
            </v-flex>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn color="secondary" outline>{{schedule.AtendimentoI}}</v-btn>
              <v-btn color="secondary" outline>text2</v-btn>
              <v-btn color="secondary" outline>text3</v-btn>
            </v-card-actions>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import specialitiesJson from '../../../data/especialidades.json'
import doctorsJson from '../../../data/medicos.json'
import scheduleJson from '../../../data/agenda.json'

export default {
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
