<template>
  <div>
    <v-form>
      <v-text-field></v-text-field>
      <v-text-field></v-text-field>
      <v-text-field
       :type="show1 ? 'text' : 'password'"
        v-model="password"
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      show1: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
