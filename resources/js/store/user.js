import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const userStore = {
    namespaced : true,
    state : {
        listUsersActive : [],
        userLogin : '',
        usersFind : [],
        userFind : '',
        isLogin : false,
        tokenUser : '',
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
        },
        FETCH_TOKEN_USER(state,token){
            state.tokenUser = token;
        },
        IS_LOGIN(state,check){
            state.isLogin = check;
        }
    },
    actions : {
        hasLogin({ commit },user){
            return new Promise((res, rej) => {
                axios.post('http://127.0.0.1:8000/api/auth/login', user)
                    .then(response => {
                        localStorage.setItem('tokenuser',response.data.access_token);
                        commit('FETCH_USER_LOGIN',response.data.user);
                        commit('IS_LOGIN',true);
                        console.log(response.data.user);
                        res(response.data);
                    })
                    .catch(err => {
                        rej(err);
                    })
            })
        },
        hasLogout({ commit }){

            return new Promise((res, rej) => {
                axios.post('http://127.0.0.1:8000/api/auth/logout',[],
                    {headers:
                        {
                            'Authorization':'Bearer ' + localStorage.getItem('tokenuser'),
                        }})
                    .then(response => {
                        localStorage.removeItem('tokenuser');
                        commit('FETCH_USER_LOGIN','');
                        commit('IS_LOGIN',false);
                        res(response.data);
                    })
                    .catch(err => {
                        rej(err);
                    })
            })
        }

    }
}
