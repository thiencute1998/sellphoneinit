<template>
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Chức vụ
                        <small>Danh sách</small>
                    </h1>
                </div>
                <!-- /.col-lg-12 -->
                <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                    <tr align="center">
                        <th>STT</th>
                        <th>Tên chức vụ</th>
                        <th>Tên Slug</th>
                        <th>Ngày tạo</th>
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

</script>
<style scoped>

</style>
