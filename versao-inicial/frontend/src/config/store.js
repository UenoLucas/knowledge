import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //estamo dizendo q o vue ira utilizar vuex

// exportando a store
export default new Vuex.Store({
    state:{
        isMenuVisible: true,
        user: {
            name: 'Usuário Mock',
            email: 'mock@cod3r.com.br'
        }
    },//mutations vai servir para setar o menu(esconder, abrir)
    mutations: {
        toggleMenu(state, isVisible){
            if(isVisible === undefined){ //se isVisible n foi passado ele alterna entre visível e n visivel
                state.isMenuVisible = !state.isMenuVisible
            }else{ //se passarmos true ou false
                state.isMenuVisible = isVisible 
            }
            // eslint-disable-next-line no-console
            console.log('toggleMenu= ' + state.isMenuVisible)
        }
    }
})