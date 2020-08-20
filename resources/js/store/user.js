import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const userStore = {
    state : {
        listUsersActive : [],
        userLogin : '',
        usersFind : [],
        userFind : '',
    },
    getters : {
        getUsersActive(state){
            return state.usersActive;
        },
        getUserLogin(state){
            return state.userLogin;
        }
    },
    mutations : {
        FETCH_LIST_USERS_ACTIVE(state,users){
            state.listUsersActive = users;
        },
        FETCH_USER_LOGIN(state,user){
            state.userLogin = user;
        }
    },
    actions : {
        
    }
}
