import axios from '@/plugins/axios'

const state = {
    users: null
}
const mutations = {
    syncUsers(state, payload) {
        state.users = null
        state.users = payload
    }
}
const actions = {
    getUsers({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('/users')
                .then(response => {
                    resolve(commit('syncUsers', response.data))
                })
                .catch(error => {
                    reject(error.response.data.message)
                })
        })
    },
    getUser({ commit }, payload) {

    },
    addUser({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/auth/register', payload)
                .then(() => resolve(dispatch('getUsers')))
                .catch(error => {
                    reject(error.response.data)
                })
        })
    },
    editUser({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            axios.put(`/user/${payload.id}`, payload)
                .then(() => resolve(dispatch('getUsers')))
                .catch(error => reject(error.response.data))
        })
    },
    removeUser({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            axios.delete(`/user/${payload.id}`)
                .then(() => resolve(dispatch('getUsers')))
                .catch(error => reject(error.response.data))
        })
    }
}
const getters = {
    users: state => state.users
}

const Users = {
    state,
    mutations,
    actions,
    getters
}

export default Users