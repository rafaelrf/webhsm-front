<template>
<div>

  <div>
    <div >
      <h1 >Confirmar Agendamento</h1>
      <br>
      <br>
      <br>
      <span> <strong class="label">Nome Paciente:</strong> <span class="data" >{{  this.$root.$data.store.selectedPatient}}</span>
      <strong class="label">   CPF:</strong> <span class="data">{{  this.$root.$data.store.selectedCpf}}</span></span>
      <br>
      <br>
      <span> <strong class="label">Nome Médico:</strong> <span class="data">{{  this.$root.$data.store.selectedDoctor}}</span>
      <strong class="label">CRM:</strong> <span class="data">5894-PI</span></span>
      <br>
      <br>
      <span> <strong class="label">Data:</strong> <span class="data">{{  this.$root.$data.store.selectedDate}}</span> <strong class="label">Horário:</strong> <span class="data">{{  this.$root.$data.store.selectedTime}}</span></span>
      <br>
      <br>
      <span> <strong class="label">Consultório:</strong> <span class="data">{{  this.$root.$data.store.selectedRoom}}</span></span>
      <br><br>
      <div>
        <v-btn @click="clear" href="javascript:history.go(-1)" color="darkgray">Voltar</v-btn>
        <router-link :to="{name:'payment'}">
        <v-btn :disabled="!valid" @click="submit" color="accent">Confirmar</v-btn>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      valid: true
    }
  },

  methods: {
    submit () {
    },
    clear () {
    }
  }
}

</script>

<style>
.label {
  font-size: 24px;
}

.data {
  font-size: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
