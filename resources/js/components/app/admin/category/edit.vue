<template>
  <div id="page-wrapper">
      <div class="modal fade" id="editCate">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">

                  <!-- Modal Header -->
                  <div class="modal-header">
                      <h4 class="modal-title">Sửa</h4>
                      <button type="button" class="close" data-dismiss="modal" @click="closeEditCate()">&times;</button>
                  </div>

                  <!-- Modal body -->
                  <div class="modal-body">
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

                      </form>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeEditCate()">Close</button>
                  </div>

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
    props : ['showEditCate'],
  data(){
    return {
      hinhanh : '',
        showEdit : this.showEditCate,
    }
  },
  beforeCreate(){
    console.log("Before created");
    this.$Progress.start();
  },
  created(){
    var idCate = 1;
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
        var idCate = 1;
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
      closeEditCate : function(){
        this.showEdit = false;
        this.$emit('closeEditForm',this.showEdit);
      }

  }
}
</script>
<style scoped>
</style>
