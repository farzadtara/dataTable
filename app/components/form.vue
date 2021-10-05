<template>
  <div>
    <v-form>
      <v-text-field v-model="id" label="id" />
      <v-text-field v-model="name" lable="name" />
      <v-text-field v-model="email" lable="email" />
      <v-text-field
        v-model="password"
        :type="show ? 'text' : 'password'"
      />
      <v-btn @click="submit({id,name,email,password})" />
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  computed: {
    id: {
      get () {
        return this.$store.state.user.id
      },
      set (value) {
        this.$store.commit('user/setId', value)
      }
    },
    name: {
      get () {
        return this.$store.state.user.name
      },
      set (value) {
        this.$store.commit('user/setName', value)
      }
    },
    email: {
      get () {
        return this.$store.state.user.email
      },
      set (value) {
        this.$store.commit('user/setEmail', value)
      }
    },
    password: {
      get () {
        return this.$store.state.user.Password
      },
      set (value) {
        this.$store.commit('user/setPassword', value)
      }
    }
  },
  methods: {
    async submit (user) {
      const userBody = {
        name: user.name,
        email: user.email,
        password: user.password
      }
      if (user.id) {
        await this.$axios.$put('http://127.0.0.1:1375/user' + user.id, user, userBody)
      } else {
        await this.$axios.$post('http://127.0.0.1:1375/user', userBody)
      }
      this.resetUser({ id: 0, name: '', email: '', password: '' })
      this.$store.commit(
        'users/storeData',
        (await this.$axios.$get("http://127.0.0.1/users")).data
      )
    },
    resetUser (user) {
      this.$store.commit('user/setId', user.id)
      this.$store.commit('user/setName', user.name)
      this.$store.commit('user/setEmail', user.email)
      this.$store.commit('user/setPassword', user.password)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
