<template>
  <div class="page-wrap">
    <v-data-table
        v-if="users"
        :headers="headers"
        :items="users"
        sort-by="id"
        class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Utenti</v-toolbar-title>
          <v-spacer></v-spacer>
          <AddEditUser />
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="">
          mdi-pencil
        </v-icon>
        <v-icon small @click="">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
      </template>
    </v-data-table>
    <v-snackbar
        v-show="outcome.message"
        :timeout="outcome.timeout"
        :value="outcome.message"
        :color="outcome.color"
        absolute
        centered
    >
      {{outcome.message}}
    </v-snackbar>
  </div>
</template>

<script>
import AddEditUser from './AddEditUser'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "UserList",
  components: {
    AddEditUser
  },
  data() {
    return {
      outcome: { message: '', color: '', timeout: -1 },
      headers: [
        { text: '#', value: 'id' },
        { text: 'Nome', value: 'firstname' },
        { text: 'Cognome', value: 'lastname' },
        { text: 'Email', value: 'email' },
        { text: 'Tipologia', value: 'role' },
        { text: 'Azioni', value: 'actions' }
      ],
      addEditUser: false,
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  created() {
    this.getUsers()
        .catch(error => this.outcome = { message: error, color: 'error', timeout: -1 })
  }
}
</script>

<style scoped>

</style>