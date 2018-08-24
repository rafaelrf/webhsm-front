<template lang="html">
<v-form ref="form" v-model="valid" lazy-validation>
  <h1 class="h4 mb-4 font-weight-normal">Cadastrar Paciente</h1>
  <h2 class="h4 mb-4 font-weight-normal">Informe os dados do Paciente:</h2>
  <v-text-field v-model="patient.name"   label="Nome Paciente" required></v-text-field>
  <v-text-field v-model="patient.id" label="Cartão HSM" required></v-text-field>
  <v-text-field v-model="patient.email" label="E-mail" required></v-text-field>
  <v-text-field v-model="patient.contact" label="Telefone" required></v-text-field>
  <v-text-field v-model="patient.cpf" label="CPF" required></v-text-field>
  <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="bornDate" lazy transition="scale-transition" offset-y full-width min-width="290px">
    <v-text-field slot="activator" v-model="patient.bornDate" label="Data Nascimento" prepend-icon="event" readonly></v-text-field>
    <v-date-picker v-model="patient.bornDate" @input="$refs.menu2.save(patient.bornDate)"></v-date-picker>
  </v-menu>
  <v-btn :disabled="!valid" @click="submit">
    Confirmar
  </v-btn>
  <v-btn @click="clear">Cancelar</v-btn>
</v-form>

</template>

<script>
import Patient from '../../domain/Patient/patient'

export default {

  data () {
    return {
      valid: true,
      menu2: '',
      nameRules: [
        v => !!v || 'Nome é um campo obrigatório!'
      ],
      emailRules: [
        v => /.+@.+/.test(v) || 'Insira um E-mail válido!'
      ],
      patient: new Patient()
    }
  },

  methods: {
    submit () {
      console.log(this.patient)
      console.log(this.patient.bornDate)
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style >

</style>
