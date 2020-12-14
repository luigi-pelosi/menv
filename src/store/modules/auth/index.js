import axios from '@/plugins/axios'
import ls from 'local-storage'

const state = {
    user: ls('user') || null,
    token: ls('token') || null
}
const mutations = {
    syncUser(state, payload) {
        ls('user', null)
        ls('token', null)
        state.user = null
        state.token = null
        if (payload) {
            ls('user', payload.data)
            ls('token', payload.token)
            state.user = payload.data
            state.token = payload.token
        }
    }
}
const actions = {
    register({ commit }, payload) {
        if (payload) {
            return new Promise(resolve => {
                axios.post('/auth/register', payload)
                    .then(response => {
                        commit('syncUser', null)
                        if (response) {
                            commit('syncUser', response)
                            resolve()
                        }
                    })
            })
        }
    },
    login({ commit }, payload) {
        if (payload) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/login', payload)
                    .then(response => {
                        commit('syncUser', response.data)
                        resolve()
                    })
                    .catch(error => {
                        reject(error.response.data)
                    })
            })
        }
    },
    logout({ commit }) {
        return new Promise(resolve => resolve(commit('syncUser')))
    }
}
const getters = {
    user: state => state.user,
    token: state => state.token
}

const Auth = {
    state,
    mutations,
    actions,
    getters
}

export default Auth