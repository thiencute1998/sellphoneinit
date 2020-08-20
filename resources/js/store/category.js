import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const cateStore = {
  namespaced : true,
  state : {
    categories : [],
    findCates : [],
    findCate : {},
  },
  getters : {
    getCate(state){
      return state.findCate;
    }
  },
  mutations : {
    FETCH_CATES(state,cates){
      state.categories = cates;
    },
    FETCH_FIND_CATES(state,cates){
      state.findCates = cates;
    },
    FETCH_FIND_CATE_BYID(state,cate){
      state.findCate = cate;
    },
  },
  actions : {
    fetchCates(context){
      axios.get('http://127.0.0.1:8000/api/admin/category/list')
      .then(response=>{
          context.commit('FETCH_CATES',response.data);
      })
    },
    createCate({},formData,config){
      axios.post('http://127.0.0.1:8000/api/admin/category/create',formData,config)
      .then(response=>{
      }).catch(e=>{

      })
    },
    editCate({},focus){
        console.log(focus);
      axios.post('http://127.0.0.1:8000/api/admin/category/'+focus.idCate+'/edit',focus.formData,focus.config)
          .then(response=>{
              return 1;
          }).catch(e=>{
          console.log("Error : "+e);
          return e;
      })
    },
    findCate({ commit },idCate){
      axios.get('http://127.0.0.1:8000/api/admin/category/'+idCate+'/find')
      .then(response=>{
        commit('FETCH_FIND_CATE_BYID',response.data);
        console.log("Data "+response.data.Ten);

      })
    },
    deleteCate({},idCate){
        axios.delete('http://127.0.0.1:8000/api/admin/category/'+idCate+'/delete')
            .then(response=>{
                this.dispatch('cate/fetchCates');
            })
            .catch(e=>{
                alert("Error happened : "+e);
            })
    }

  }
}

export default cateStore;
