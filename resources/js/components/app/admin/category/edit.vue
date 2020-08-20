<template>
  <div id="page-wrapper">
      <div class="container-fluid">
          <div class="row">
              <div class="col-lg-12">
                  <h1 class="page-header">Thể loại
                      <small>Sửa</small>
                  </h1>
              </div>
              <div class="col-lg-7" style="padding-bottom:120px">
                  <form @submit.prevent="editCategory" enctype="multipart/form-data">
                      <div class="form-group">
                          <label>Tên thể loại</label>
                          <input class="form-control" v-model="getCate.Ten" placeholder="Nhập tên thể loại" />
                      </div>
                      <div class="form-group">
                          <label>Chon hình ảnh</label>
                          <input type="file" @change="fileChange" class="form-control" />
                      </div>
                      <div class="form-group">
                          <label>Ghi chú</label>
                          <input class="form-control" v-model="getCate.ghichu" placeholder="Nhập ghi chú" />
                      </div>
                      <button type="submit" class="btn btn-success">Sửa</button>
                      <button type="reset" class="btn btn-default">Làm mới</button>
                  </form>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      hinhanh : '',
    }
  },
  beforeCreate(){
    console.log("Before created");
    this.$Progress.start();
  },
  created(){
    var idCate = this.$route.params.id;
    this.$store.dispatch('cate/findCate',idCate);

  },
  computed: {
    ...mapGetters('cate',['getCate']),

  },
  mounted(){
    this.$Progress.finish();
  },
  methods : {
      // ...mapActions('cate',['editCate']),
    fileChange(e){
      this.hinhanh = e.target.files[0];
    },
    editCategory(){
        this.$Progress.start();
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      }
      var formData = new FormData();``
      formData.append('file', this.hinhanh);
      formData.append('ten',this.getCate.Ten);
      formData.append('ghichu',this.getCate.ghichu);
        var idCate = this.$route.params.id;
        var _this = this;
      this.$store.dispatch('cate/editCate',{
          idCate : idCate,
          formData : formData,
          config : config
      }).then(result=>{
          setTimeout(function(){
              _this.$Progress.finish();
              _this.$router.push('/admin/category/list');
          }, 1000);
      }).catch(e=>{
          console.log("Error happened : "+e);
      })
        // this.editCate(this.$route.params.id,formData,config);

    },

  }
}
</script>
<style scoped>
</style>
