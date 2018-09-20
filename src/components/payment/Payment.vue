<template>
  <div>
        <h1 class="h4 mb-4 font-weight-normal">Agendamento Confirmado</h1>
        <br>
        <br>
        <br>
        <h2 class="h4 mb-4 font-weight-normal">Número do Agendamento: 63656968</h2>

        <br>
        <span>  <span class="data">Foi enviado um email de confirmação para seu email cadastrado</span></span>
        <br>
        <span><span class="data">Ou manteremos contato via telefone.</span></span>
        <br>
        <br><br>

          <div>
            <v-btn @click="clear" color="success">Pagar Agora</v-btn>
            <router-link :to="{ name: 'Home'}">
            <v-btn :disabled="!valid" @click="submit" color="accent">Finalizar</v-btn>
            </router-link>
          </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valid: true
    }
  }
}
</script>

<style >
</style>
