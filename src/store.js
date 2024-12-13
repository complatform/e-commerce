import router from './router';
import vuex from 'vuex'

export default new vuex.Store({
    state:{
        showSideBar:false,
        //selectedPAge:''
    },
    getters:{

    },
    mutations:{
        TOGGLE_BAR(state){
            state.showSideBar = !state.showSideBar
        },
    //     REDIRECT(state,pageA,pageB,Signin,Signup){
    //   if(state.selectedPAge == pageA){
    //     router.push(Signin)
    //   }
    //   else if(state.selectedPAge == pageB){
    //     router.push(Signup)
    //   }
    //     }
    CART(state,amazonCart){
        router.push(amazonCart)
    }
    },
    actions:{
toggleShowBar({commit}){
    commit("TOGGLE_BAR")
},
redirectToCart({commit},amazonCart){
   
commit("CART",amazonCart)
}
// redirectToPage({commit},pageA,pageB,Signin,Signup){
//     commit("REDIRECT",pageA,pageB,Signin,Signup)
// }

    }
})