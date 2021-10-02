<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        <v-card>
          <v-card-text>
            <Table />
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
  }
}
</script>
