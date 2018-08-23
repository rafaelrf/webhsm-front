<template>
  <v-flex xs12 sm8 md4>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-select v-model="agreement" :items="agreements" item-text="Nm_Convenio" item-value="Id_Convenio" :rules="[v => !!v || 'Item is required']" label="Convênios" required outline></v-select>
    <v-select v-model="speciality" :items="specialities" item-text="Nm_Especialidade" item-value="id_especialidade" :rules="[v => !!v || 'Item is required']" label="Especialidades" required outline></v-select>
    <v-select  v-model="doctor" :items="filteredData" item-text="Nm_Medico" item-value="Id_Medico" :rules="[v => !!v || 'Item is required']" label="Médico" required outline></v-select>
    <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
      <v-text-field slot="activator" v-model="date" label="Data Agendamento" prepend-icon="event" readonly></v-text-field>
      <v-date-picker v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>
    </v-menu>
    <v-btn :disabled="!valid" @click="submit">
      Confirmar
    </v-btn>
    <v-btn @click="clear">Cancelar</v-btn>
  </v-form>
</v-flex>
</template>

<script>
import agreementsJson from '../../../data/convenios.json'
import specialitiesJson from '../../../data/especialidades.json'
import doctorsJson from '../../../data/medicos.json'

export default {
  data: () => ({
    date: null,
    menu: false,
    modal: false,
    menu2: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    speciality: {},
    specialities: specialitiesJson,
    doctor: {},
    doctors: doctorsJson,
    agreement: {},
    agreements: agreementsJson
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        this.$http.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  computed: {
    filteredData () {
      let filtered = this.doctors
      return filtered.filter(doctor => doctor.Id_Especial === this.speciality)
    }
  }

}

</script>

<style>

</style>
