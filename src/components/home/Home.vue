<template>
<v-form ref="form" v-model="valid" lazy-validation>
  <v-select v-model="agreement" :items="agreements" item-text="Nm_Convenio" item-value="Id_Convenio" :rules="[v => !!v || 'Item is required']" label="Convênios" required outline></v-select>
  <v-select v-model="speciality" :items="specialities" item-text="Nm_Especialidade" item-value="id_especialidade" :rules="[v => !!v || 'Item is required']" label="Especialidades" required outline></v-select>
  <v-select v-model="doctor" :items="filteredData" item-text="Nm_Medico" item-value="Id_Medico" :rules="[v => !!v || 'Item is required']" label="Médico" required outline></v-select>
  <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
    <v-text-field slot="activator" v-model="dateFormatted" label="Data do Atendimento" prepend-icon="event" readonly @blur="date = parseDate(dateFormatted)"></v-text-field>
    <v-date-picker v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>
  </v-menu>
  <router-link :to="{name:'doctor', params: {id: speciality,id2: doctor,id3: day+1} }">
    <v-btn :disabled="!valid" @click="submit">
      Confirmar
    </v-btn>
  </router-link>

  <v-btn @click="clear">Cancelar</v-btn>
</v-form>
</template>

<script>
import agreementsJson from '../../../data/convenios.json'
import specialitiesJson from '../../../data/especialidades.json'
import doctorsJson from '../../../data/medicos.json'

export default {
  data: () => ({
    date: null,
    dateFormatted: null,
    day: 0,
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
      this.$root.$data.store.selectedCrm = this.doctor.CRM_Medico
    },
    clear () {

    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  },
  computed: {
    filteredData () {
      let filtered = this.doctors
      return filtered.filter(doctor => doctor.Id_Especial === this.speciality)
    },

    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },

  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
      this.$root.$data.store.selectedDate = new Date(this.date)
      this.day = this.$root.$data.store.selectedDate.getDay()
    }
  }

}
</script>

<style>
.form-search {
  width: 100%;
  max-width: 550px;
  padding: 15px;
  margin: auto;
}

.form-input {
  width: 100%;
  max-width: 450px;
  padding: 15px;
  margin: auto;
}

.form-search .form-input .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-search .form-input .form-control:focus {
  z-index: 2;
}

.form-search .form-input input[type="date"] {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-search .form-input input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
