<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
        Aggiungi
      </v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Nome *" v-model="firstname" :rules="rules.firstname" />
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Cognome *" v-model="lastname" :rules="rules.lastname" />
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email *" v-model="email" :rules="rules.email" />
              </v-col>
              <v-col cols="12">
                <v-text-field
                    :append-icon="passwordView ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="passwordView ? 'text' : 'password'"
                    name="input-10-2"
                    label="Password *"
                    :counter="10"
                    :rules="rules.password"
                    v-model="password"
                    @click:append="passwordView = !passwordView"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-select :items="['basic']" label="Ruolo" :rules="rules.role" v-model="role"></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>* campi obbligatori</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Annulla
          </v-btn>
          <v-btn color="blue darken-1" text @click="submit">
            Salva
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "AddEditUser",
  data() {
    return {
      dialog: false,
      title: 'Aggiungi nuovo utente',
      valid: false,

      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordView: false,
      role: '',
      rules: {
        firstname: [v => !!v || 'Nome obbligatorio'],
        lastname: [v => !!v || 'Cognome obbligatorio'],
        email: [
          v => !!v || 'E-mail obbligatoria',
          v => /.+@.+\..+/.test(v) || 'Inserisci una mail valida',
        ],
        password: [
          v => !!v || 'Password obbligatoria',
          v => (v && v.length >= 6) || 'La password deve essere maggiore di 6',
        ],
        role: [ v => !!v || 'Ruolo obbligatorio' ]
      }
    }
  },
  methods: {
    ...mapActions(['addUser']),
    submit() {
      this.valid = this.$refs.form.validate()
      if (this.valid) {
        const user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          role: this.role
        }
        this.addUser(user)
            .then(() => {
              this.dialog = false
            })
      }
    }
  }
}
</script>

<style scoped>

</style>