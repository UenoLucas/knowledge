import Vue from 'vue'
export const baseApiUrl = 'http://localhost:3000'

export function showError(e){ //exportando mensagens de erro para o usuário
    if(e && e.response && e.response.data){
        Vue.toasted.global.default({ msg: e.response.data }) 
    }else if( typeof e === 'string'){
        Vue.toasted.global.defaultError({ msg : e})
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError }