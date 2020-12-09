import Vuex from 'vuex'
import Vue from 'vue'
import largeSidebar from './modules/largeSidebar'
import compactSidebar from './modules/compactSidebar'
import themeConfig from './modules/themeConfig'
import verticalSidebar from './modules/verticalSidebar'

import ApplicationStates from './modules/states'
import Auth from './modules/auth'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    largeSidebar,
    compactSidebar,
    themeConfig,
    verticalSidebar,
    ApplicationStates,
    Auth
  },
})
