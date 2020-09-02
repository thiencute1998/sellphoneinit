import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const cateStore = {
  namespaced : true,
  state : {
    categories : {},
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
      ADD_CATE_TO_LIST(state,cate){
        state.categories.data.unshift(cate);
      },
      ADD_REMOVE_CATE_TO_LIST(state,cate){
          state.categories.data.unshift(cate);
          state.categories.data.pop();
      },
  },
  actions : {
    fetchCates(context,page){
        return new Promise((res,rej) =>{
            axios.get('http://127.0.0.1:8000/api/admin/category/list?page='+page)
                .then(response=>{
                    context.commit('FETCH_CATES',response.data);
                    res(response.data);

                }).catch(e=>{
                rej(e);
            })
        })
        // axios.get('http://127.0.0.1:8000/api/admin/category/list?page='+page)
        //         .then(response=>{
        //             context.commit('FETCH_CATES',response.data);
        //         }).catch(e=>{
        //
        //     })
    },
    createCate({ commit },focus){
        return new Promise((res,rej) =>{
            axios.post('http://127.0.0.1:8000/api/admin/category/create',focus.formData,focus.config)
                .then(response=>{
                    if(focus.lengthCate == 5){
                        commit('ADD_REMOVE_CATE_TO_LIST',response.data);
                        this.dispatch('cate/fetchCates');
                    }
                    else{
                        commit('ADD_CATE_TO_LIST',response.data);
                        this.dispatch('cate/fetchCates');
                    }

                    res(response.data);
                }).catch(e=>{
                    rej(e);
            })
        })

    },
    editCate({},focus){

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
