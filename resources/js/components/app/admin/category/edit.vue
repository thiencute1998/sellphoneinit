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
                  <form @submit.prevent="editCategory" method="POST" enctype="multipart/form-data">
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
                      <div class="form-group">
                          <label>Trạng thái</label>
                          <label class="radio-inline">
                              <input v-model="rdoTrangThai" value="1" checked="" type="radio">Còn
                          </label>
                          <label class="radio-inline">
                              <input v-model="rdoTrangThai" value="0" type="radio">Hết
                          </label>
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
export default {
  data(){
    return {
      ten : '',
      hinhanh : '',
      ghichu : '',
      rdoTrangThai : '',
    }
  },
  created(){
    console.log("Created : "+document.querySelector('.container-hihi'));
      axios.get('http://127.0.0.1:8000/api/admin/category/'+this.$route.params.id+'/find')
      .then(response=>{
        console.log(response.data);
        this.ten = response.data.Ten;
        this.ghichu = response.data.ghichu;

      })
  },
  mounted(){
    console.log("Mounted : "+document.querySelector('.container-hihi'));
  },
  methods : {
    fileChange(e){
      console.log(e.target.files[0]);
      this.hinhanh = e.target.files[0];
    },
    editCategory(){
      let currentObj = this;
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      }
      let formData = new FormData();
      formData.append('file', this.hinhanh);
      formData.append('ten',this.ten);
      formData.append('ghichu',this.ghichu);
      axios.post('http://127.0.0.1:8000/api/admin/category/'+this.$route.params.id+'/edit',formData,config)
      .then(response=>{
        console.log(response.data);
        this.$router.push('/admin/category/list');
      })
      .catch(e=>{
        console.log(e);
      })
    }
  }
}
</script>
<style scoped>
</style>
