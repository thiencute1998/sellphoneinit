<template>
<div id="page-wrapper">
  <div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Thể loại
                <small>Danh sách</small>
                <button class="btn btn-success" data-toggle="modal" data-target="#addCate" @click="showCreateCate = true">Thêm mới</button>
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
                <tr v-for="(item,index) in categories.data" :key="index" class="odd gradeX" align="center">
                    <td>{{index+1}}</td>
                    <td>{{item.ten}}</td>
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
                        <button class="btn btn-success" data-toggle="modal" data-target="#editCate" @click="showEditCate = true">Sửa</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination :data="categories" :limit="2" @pagination-change-page="getResults"></pagination>
        <CreateCategory :cateFirstPage="cateFirstPage" :createSuccess="createSuccess" :showCreateCate="showCreateCate" v-if="showCreateCate" @closeCreateForm="showCreateCate = $event" @checkCreate="createSuccess = $event"></CreateCategory>
        <EditCategory v-if="showEditCate" :showEditCate="showEditCate" @closeEditForm="showEditCate = $event"></EditCategory>
        <div v-if="createSuccess" class="success">
                Created success
        </div>
    </div>
  </div>

</div>

</template>

<script>
    import CreateCategory from './create';
    import EditCategory from './edit';

export default {
    components : {
        CreateCategory,
        EditCategory
    },
  data(){
    return{
        showCreateCate : false,
        showEditCate : false,
        createSuccess : false,
        editSuccess : false,
        cateFirstPage : [],
    }
  },
  created(){
  },
  computed: {
    categories(){
      return this.$store.state.cate.categories;
    },

  },
    watch : {
        createSuccess(){
            var _this = this;
            setTimeout(function () {
                _this.createSuccess = false;

            },2000)
        }
    },
  mounted(){
      this.getResults();
  },
  methods: {
    getImage(img){
      return "upload/theloai/" + img;
    },
    deleteCategory(id){
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
    },
      getResults(page = 1) {
          this.$Progress.start();

          this.$store.dispatch('cate/fetchCates',page).then(response=>{
              this.$Progress.finish();
              if(page == 1){
                  this.cateFirstPage = response.data.length;
              }
              console.log(response.data);
          });

      }

  }

}
</script>

<style scoped>
    .success{
        position: fixed;
        width: 180px;
        height: 70px;
        background-color: #2d995b;
        top: 50%;
        left: 50%;
        right: 50%;
        bottom: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        color:white ;
        animation-name: myAnimation;
        animation-duration: 2000ms;
        animation-fill-mode: forwards;
    }
    @keyframes myAnimation {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;

        }
        100% {

            opacity: 0;
        }
    }
    ul.pagination{
        display: flex !important;
        justify-content: center;
    }


</style>
