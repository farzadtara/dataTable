<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      multi-sort
      show-select
    />
    <template [`item.edit`]="{ item }">
      <v-btn color="lime accent-2" @click="editItem(item)">
        Edit
      </v-btn>
    </template>
    <template [`item.delete`]="{ item }">
      <v-btn color="red darken-3" @click="deleteItem(item._id)">
        Delete
      </v-btn>
    </template>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    try {
      const users = await $axios.$get('http://127.0.0.1:1375/users')
      console.log(users)
    } catch (error) {

    }
  },
  data () {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Password', value: 'password' },
        { text: 'Etit', value: 'edit' },
        { text: 'Delete', value: 'delete' }
      ]
    }
  },

  async fetch () {
    this.$store.commit(
      'users/storeData',
      (await this.$axios.$get('http://127.0.0.1:1375/users')).data
    )
  },
  computed: {
    users () {
      return this.$store.state.users.data
    }
  },
  methods: {

    async deleteItem (id) {
      await this.$axios.$delete('http://127.0.0.1:1375/users' + id)
      this.$store.commit(
        'users/storData',
        (await this.$axios.$get('http://127.0.0.1:1375/users')).data
      )
    },
    editItem (user) {
      this.$store.commit('user/setId', user._id)
      this.$store.commit('user/setName', user.name)
      this.$store.commit('user/setEmail', user.email)
      this.$store.commit('user/setPassword', user.password)
    }

  }
}
</script>
