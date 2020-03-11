import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        tasks:[
            {
                title:'Cook',
                completed: false
            },
            {
                title:'Wash',
                completed: false
            },
        ]

    },
    mutations:{
        SAVE_TASK(state,payload){
            state.tasks.push({
                title:payload,
                completed: false
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