import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        tasks:[
            {
                title:'Cook'
            },
            {
                title:'Wash'
            },
        ]

    },
    mutations:{
        SAVE_TASK(state,payload){
            state.tasks.push({
                title:payload
            })
        }

    },
    actions:{
        UPDATE_TASKS_LIST(context,payload){
            context.commit('SAVE_TASK', payload)
        }

    },
    getters:{
        ALL_TASKS: state => state.tasks.length

    }
})