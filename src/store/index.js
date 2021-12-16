import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)


const usuarios = {
  state: {
    usuarios:[]
  }
}

const pacientes = {
  state: {
    pacientes:[]
  },

  mutations:{
    getPacientesM(state, payload){
        state.pacientes = payload
    },
    addPacientesM(state, payload){
      state.pacientes = payload
    }
  },

  actions:{
    getPacientes({ commit }){
      Axios.get('http://localhost:8081/pacientes').then(resp => {
        commit('getPacientesM', resp.data )
      })
    },
    addPaciente({ commit },add){
      console.log(add);
      Axios.post('http://localhost:8081/pacientes',add).then(resp => {
        commit('getPacientesM', resp.data )
      })
    },
  }
}

const store = new Vuex.Store({
  modules: {
    pacientes,
    usuarios
  }
})

export default store

