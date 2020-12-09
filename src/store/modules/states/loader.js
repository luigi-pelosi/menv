import axios from '@/plugins/axios'

const state = {
    loading: false
}
const mutations = {
    syncLoading(state, payload) {
        state.loading = payload
    }
}
const actions = {
    load({ commit }) {
        commit('syncLoading', true)
    },
    unload({ commit }) {
        commit('syncLoading', false)
    },
    intercept() {
        axios.interceptors.request.use(config => {
            this.load()
            return config
        }, error => {
            this.unload()
            return Promise.reject(error)
        })

        axios.interceptors.response.use(config => {
            this.unload()
            return response
        }, error => {
            this.unload()
            return Promise.reject(error)
        })
    },
    eject() {
        axios.interceptors.request.eject(axios)
    }
}
const getters = {
    isLoading: state => state.loading
}

const Loader = {
    state,
    mutations,
    actions,
    getters
}

export default Loader