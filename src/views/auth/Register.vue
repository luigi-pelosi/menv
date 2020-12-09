<template>
  <div class="page-wrap">
    <div class="session-form-hold">
      <base-card>
        <v-card-text class="text-center">
          <div class="py-3">
            <h5 class="font-bold">SMARTFUEL</h5>
            <p class="text-muted font-semibold">Registrati</p>
          </div>
          <v-avatar tile size="200" class="mb-4">
            <img src="@/assets/images/illustrations/posting_photo.svg" alt="">
          </v-avatar>
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
            <v-text-field
                label="Nome"
                v-model="firstname"
                :rules="rules.firstname"
                :disabled="loading"
            />
            <v-text-field
                label="Cognome"
                v-model="lastname"
                :rules="rules.lastname"
                :disabled="loading"
            />
            <v-text-field
                label="Email"
                v-model="email"
                :rules="rules.email"
                :disabled="loading"
            />
            <v-text-field
                :append-icon="passwordView ? 'mdi-eye' : 'mdi-eye-off'"
                :type="passwordView ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                :counter="10"
                :rules="rules.password"
                :disabled="loading"
                v-model="password"
                @click:append="passwordView = !passwordView"
            ></v-text-field>
            <v-btn class="mb-4" @click="submit" block color="primary" :loading="loading" :disabled="loading">Registrati</v-btn>
          </v-form>
          <div class="">
            Già registrato?
            <v-btn text small color="primary" to="/auth/login">Accedi</v-btn>
          </div>
        </v-card-text>
      </base-card>
    </div>
    <v-snackbar
        v-show="outcome"
        :timeout="3000"
        :value="outcome"
        :color="outcome ? 'success' : 'error'"
        absolute
        centered
    >
      {{outcome}}
    </v-snackbar>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  metaInfo: {
    title: "Registrati",
  },
  data() {
    return {
      loading: false,
      valid: false,
      outcome: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordView: false,
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
        ]
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    submit() {
      this.valid = this.$refs.form.validate()
      if (this.valid) {
        const user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        }
        this.loading = true
        this.register(user)
          .then(() => {
            this.loading = false
            this.outcome = 'Hai completato con successo la tua registrazione'
            this.$router.push('/')
            /* @TODO
              inserire timer e invio mail per conferma
             */
          })
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.page-wrap {
  background-color: #242939 !important;
  display: flex;
  align-items: center;
  padding: 40px 1rem;
  height: 100%;
  min-height: 100vh;
}

.session-form-hold {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>