import cateStore from "./category.js";
import Vuex from 'vuex';

export const store = new Vuex.Store({
  modules : {
    cate : cateStore,
  }
});
