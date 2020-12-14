import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API
axios.defaults.headers.common['x-access-token'] = ''
axios.tokenize = (token) => axios.defaults.headers.common['x-access-token'] = token

export default axios