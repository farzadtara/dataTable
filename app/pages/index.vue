<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        <v-card>
          <v-card-text>
            <Table :allusers="allusers" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Table from '@/components/Table'
export default {
  component: {
    Table
  },
  async asyncData ({ $axios }) {
    try {
      const users = await $axios.$get('http://localhost:1375/users')
      return {
        allusers: users
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      allusers: []
    }
  }
}
</script>
