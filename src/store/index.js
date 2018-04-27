import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

// [vuex] must call Vue.use(Vuex) before creating a store instance.
Vue.use(Vuex)



export default new Vuex.Store({
    state,
    mutations,
    getters: {
        doubleCity () {
            return state.city + " " + state.city
        }
    }
    /* 
    暂时用不到actions做转发
    actions: {
        changeCity (context, city) {
            context.commit('changeCity', city)
        }
    }, */
})