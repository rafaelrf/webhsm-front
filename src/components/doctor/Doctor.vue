<template>
<div>
  <h1>{{$route.params.id}}</h1>
  <h1>{{ dados.teste}}</h1>
  <h1>{{ dados.teste2}}</h1>
</div>
</template>

<script>
export default {
  data () {
    return {
      dados: this.$route.params.id

    }
  }
}
</script>
<style>
</style>
