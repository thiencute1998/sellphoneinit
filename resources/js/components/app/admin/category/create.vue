<template>
  <div id="page-wrapper">

      <div class="modal fade" id="addCate">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">

                  <!-- Modal Header -->
                  <div class="modal-header">
                      <h4 class="modal-title">Thêm thể loại</h4>
                      <button type="button" class="close" data-dismiss="modal" @click="closeCreateCate()">&times;</button>
                  </div>

                  <!-- Modal body -->
                  <div class="modal-body">
                      <form @submit.prevent="createCategory" method="POST" enctype="multipart/form-data">
                          <div class="form-group">
                              <label>Tên thể loại</label>
                              <input class="form-control" :class="{ 'input-error': $v.ten.$error,'input-dirty' : $v.ten.$dirty }" v-model.trim="$v.ten.$model" placeholder="Nhập tên thể loại" />
                              <div class="error" v-if="!$v.ten.required && $v.ten.$error">Tên không được để trống!!!</div>
                              <div class="error" v-if="!$v.ten.minLength">Tên phải ít nhất 5 ký tự</div>
                          </div>
                          <div class="form-group">
                              <label>Chon hình ảnh</label>
                              <input type="file" @change="fileChange" class="form-control" />
                          </div>
                          <div class="form-group">
                              <label>Ghi chú</label>
                              <input class="form-control" v-model="ghichu" placeholder="Nhập ghi chú" />
                          </div>
                          <button type="submit" class="btn btn-success">Thêm</button>
                      </form>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" @click="closeCreateCate()" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
      <div v-show="isLoading" class="loading">
          <div class="back-loading"></div>
          <img class="img-loading" src="image/loading.gif" alt="">
      </div>
  </div>

</template>

<script>
    // import Vue from 'vue'
    // import Vuelidate from 'vuelidate'
    // Vue.use(Vuelidate)
    // import 'vue-form-wizard/dist/vue-form-wizard.min.css';

    import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
    props : ['showCreateCate','createSuccess','cateFirstPage'],
  data(){
    return {
        ten : '',
        ghichu : '',
        hinhanh : '',
        showCreate : this.showCreateCate,
        checkCreate : this.createSuccess,
        isLoading : false,
        lengthCateFirst : this.cateFirstPage,

    }
  },
    validations: {
            ten : {
                required,
                minLength : minLength(5),
            },
            ghichu : {
                required,
                minLength : minLength(6),
            }

    },
  created(){
      console.log("Length : "+this.lengthCateFirst);
  },
    // watch : {
    //     cateFirstPage(newValue){
    //         this.lengthCateFirst = newValue;
    //     }
    // },
  mounted(){
    this.$Progress.finish();
  },
  methods : {
      setName(value) {
          this.ten = value
          this.$v.ten.$touch()
      },
    fileChange(e){
      this.hinhanh = e.target.files[0];
    },
    createCategory(){
      this.$Progress.start();
        var _this = this;
        _this.isLoading = true;
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      }
      var formData = new FormData();
      formData.append('file', this.hinhanh);
      formData.append('ten',this.ten);
      formData.append('ghichu',this.ghichu);
      var focus = {
          formData : formData,
          config : config,
          lengthCate : this.lengthCateFirst
      }

      this.$store.dispatch('cate/createCate',focus).then(result=>{
          _this.isLoading = false;
          _this.closeCreateCate()
          _this.fadeCreateCate()
          _this.$Progress.finish();
      }).catch(e=>{
          _this.isLoading = false;
          console.log("Error happened : "+e);
      });
        // _this.closeCreateCate()
    },
      closeCreateCate : function () {
            this.showCreate = false;
            this.$emit('closeCreateForm',this.showCreate);
      },
      fadeCreateCate(){
        this.checkCreate = true;
          this.$emit('checkCreate',this.checkCreate);

      }
  }
}
</script>

<style scoped>
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
    }
    .back-loading{
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.7;
    }
    .img-loading{
        width: 30px;
        height: 30px;
        position: absolute;
        top : 40%;
        left: 50%;
        z-index:99999;
    }

    .input-dirty{
        border-color: #5A5;
        background: #EFE;
    }
    .input-dirty:focus{
        outline-color: #8E8;
    }
    .error{
        color:red;
    }
    .input-error{
        border-color: red;
        background: #FDD;
    }
    .input-error:focus{
        outline-color: #F99 !important;
    }

</style>
