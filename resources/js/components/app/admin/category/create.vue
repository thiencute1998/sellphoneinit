<template>
  <div id="page-wrapper">
      <div class="container-fluid">
          <div class="row">
              <div class="col-lg-12">
                  <h1 class="page-header">Thể loại
                      <small>Thêm</small>
                  </h1>
              </div>
              <div class="col-lg-7" style="padding-bottom:120px">
                  <form @submit.prevent="createCategory" method="POST" enctype="multipart/form-data">
                      <div class="form-group">
                          <label>Tên thể loại</label>
                          <input class="form-control" v-model="ten" placeholder="Nhập tên thể loại" />
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
                      <button type="reset" class="btn btn-default">Làm mới</button>
                  </form>
              </div>
          </div>

      </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
        ten : '',
        ghichu : '',
        hinhanh : '',

    }
  },
  created(){

  },
  mounted(){
    this.$Progress.finish();
  },
  methods : {
    fileChange(e){
      this.hinhanh = e.target.files[0];
    },
    createCategory(){
      this.$Progress.start();
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      }
      var formData = new FormData();
      formData.append('file', this.hinhanh);
      formData.append('ten',this.ten);
      formData.append('ghichu',this.ghichu);
      var _this = this;
      this.$store.dispatch('cate/createCate',formData,config).then(result=>{
          setTimeout(function(){
              _this.$Progress.finish();
              _this.$router.push('/admin/category/list');
          }, 1000);
      }).catch(e=>{
          console.log("Error happened : "+e);
      });


    }
  }
}
</script>

<style scoped>
</style>
