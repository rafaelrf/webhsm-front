<template>
<v-card>
  <v-container grid-list-xs text-xs-center>
    <v-layout row wrap justify-center align-center>
      <v-flex xs0 sm3 md3 lg3 xl3>
          <img  v-bind:src="require('@/assets/doctor.png')" contain height="80px">
      </v-flex>
      <v-flex xs12 sm9 md9 lg9 xl9>
        <v-card-title primary-title class="card-title">
          <h3>Dr(a): {{doctorName}}</h3>
        </v-card-title>
        <v-cav-card-text>
          <span class="card-description">{{speciality}}</span>
          <br>
          <span class="card-description">Consultório: {{room}}</span>
          <br>
          <span class="card-description">Atendimento: <b>{{schedules}}</b></span>
        </v-cav-card-text>
      </v-flex>
      <v-divider light></v-divider>
      <v-card-actions>
        <router-link :to="{name:'patient', params: {id: id} }">
          <v-btn @click="submit" color="accent">Agendar Consulta</v-btn>
        </router-link>
      </v-card-actions>
    </v-layout>
  </v-container>
</v-card>
</template>

<script>
export default {
  props: ['doctorName', 'speciality', 'room', 'schedules', 'id'],
  data () {
    return {
      isActive: true,
      radioGroup: true
    }
  },

  methods: {
    submit  () {
      this.selectedDoctor=this.doctorName
      console.log(this.selectedDoctor);
    },
    myFilter: function () {
      this.isActive = !this.isActive
      // some code to filter users
    }
  }

}
</script>

<style >
.card-title {
  text-align: justify;
}

.card-description {
  font-style: italic;
}

.btn-time {
  margin: 0px .5px 0px .5px;
}

.btn-active {
  background-color: blue;
}
</style>
