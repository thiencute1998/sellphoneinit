<template>
<div id="page-wrapper">
  <div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Thể loại
                <small>Danh sách</small>
            </h1>
        </div>
        <!-- /.col-lg-12 -->
        <table class="table table-striped table-bordered table-hover" id="dataTables-example">
            <thead>
                <tr align="center">
                    <th>ID</th>
                    <th>Tên thể loại</th>
                    <th>Hình ảnh</th>
                    <th>Ghi chú</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in categories" :key="index" class="odd gradeX" align="center">
                    <td>{{index+1}}</td>
                    <td>{{item.Ten}}</td>
                    <td>
                    <img width="100px" height="100px" :src="getImage(item.hinhanh)">
                       </td>
                    <td>{{item.ghichu}}</td>
                    <td class="center">
                        <button @click="deleteCategory(item.id)" class="btn btn-info btn-action">
                            <i class="fa fa-trash-o  fa-fw"></i><a> Xóa</a>
                        </button>
                        </td>
                    <td class="center">
                        <router-link tag="button" :to="{ name: 'edit_category', params: {id :  item.id  } }" class="btn btn-default btn-success">
                            <i class="fa fa-pencil fa-fw"></i> Sửa
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>

</div>

</template>

<script>


export default {
  data(){
    return{

    }
  },
  created(){
    this.$Progress.start();
    this.$store.dispatch('cate/fetchCates');

    this.$Progress.finish();

  },
  computed: {
    categories(){
      return this.$store.state.cate.categories;
    }
  },
  mounted(){

  },
  methods: {
    getImage(img){
      return "upload/theloai/" + img;
    },
    deleteCategory(id){
      // axios.delete('http://127.0.0.1:8000/api/admin/category/'+id+'/delete')
      // .then(response=>{
      //   console.log(response.data);
      //   let index = this.categories.map(cate=>cate.id).indexOf(id);
      //   this.categories.splice(index,1);
      //
      // })
      // .catch(e=>{
      //   alert("Error happened : "+e);
      // })
        var _this = this;
        this.$Progress.start();
        this.$store.dispatch('cate/deleteCate',id).then(result=>{
            setTimeout(function () {
                _this.$Progress.finish();
                alert("Delete successed!!!");
            },1000)
        }).catch(e=>{
            alert("Error happened : "+e);
            _this.$Progress.finish();
        })
    }
  }

}
</script>

<style scoped>
</style>
