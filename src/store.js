import vue from 'vue'
import vuex from 'vuex'

export default new vuex.Store({
    state:{
        showSideBar:false,
    },
    getters:{

    },
    mutations:{
        TOGGLE_BAR(state){
            state.showSideBar = !state.showSideBar
        }
    },
    actions:{
toggleShowBar({commit}){
    commit("TOGGLE_BAR")
}
    }
})