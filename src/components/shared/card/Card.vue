<template>
<v-card>
  <v-container grid-list-xs text-xs-center>
    <v-layout row wrap justify-center align-center>
      <v-flex xs0 sm3 md3 lg3 xl3>
        <v-card-media src="https://via.placeholder.com/100x100" contain height="100 px">
        </v-card-media>
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
          <span class="card-description">Horário: {{schedules}}</span>
        </v-cav-card-text>
      </v-flex>
      <v-divider light></v-divider>
      <v-card-actions>
      </v-card-actions>
    </v-layout>
  </v-container>
</v-card>
</template>

<script>
export default {
  props: ['doctorName', 'speciality','room', 'schedules'],
  data () {
    return {
      isActive: true,
      radioGroup: true
    }
  },

  methods: {
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
