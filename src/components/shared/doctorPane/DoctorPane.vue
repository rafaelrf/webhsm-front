<template >
  <v-flex xs12 sm4 md4>
    <v-card >
      <v-layout>
        <v-flex xs5>
          <v-card-media src="https://via.placeholder.com/160x125" height="125px" contain></v-card-media>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <p class="headline">{{filteredData.id_especialidade}} </p>
              <p>{{filteredData.id_especialidade}}</p>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions>
        <v-radio-group v-model="value" row>
          <v-radio label="Horario 1" value="value1"></v-radio>
          <v-radio label="Horario 2" value="value2"></v-radio>
          <v-radio label="Horario 3" value="value3"></v-radio>
        </v-radio-group>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
}
</script>

<style >
</style>
