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
          <br>
          <span class="card-description">{{speciality}}</span>
        </v-card-title>
      </v-flex>
      <v-divider light></v-divider>
      <v-card-actions>
        <v-radio-group v-model="radioGroup" row height="1px">
          <v-radio v-for="time of schedules" v-bind:key="`d${time}`" :label="time" :value="time"></v-radio>
        </v-radio-group>
      </v-card-actions>
    </v-layout>
  </v-container>
</v-card>
</template>

<script>
export default {
  props: ['doctorName', 'speciality', 'schedules'],
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
