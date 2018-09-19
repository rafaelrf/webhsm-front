<template>
<v-app id="inspire">
  <v-navigation-drawer v-model="drawer" clipped-left app>
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>schedule</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Agendar Consulta</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>event</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Agendar Cirurgia</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="primary" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Hospital São Marcos</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer color="primary" app>
    <span class="white--text">&copy; 2018</span>
  </v-footer>
</v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    selectedDate:'',
    selectedDoctor:'',
    selectedSpeciality: '',
    selectedTime: '',
    selectedRoom: '',
    selectedPatient: ''
  }),
  props: {
    source: String
  }
}
</script>

<style>
#app {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
</style>
