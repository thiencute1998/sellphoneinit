//import modules
import cateStore from "./category.js";
import { userStore } from "./user.js";

//Vuex
import Vuex from 'vuex';

export const store = new Vuex.Store({
  modules : {
    cate : cateStore,
    userStore : userStore,
  }
});
