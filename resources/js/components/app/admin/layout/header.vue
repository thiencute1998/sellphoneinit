<template>
  <div class="header-hihi">
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a style="color: blue; font-size: 30px" class="navbar-brand" href="#">Quay lại trang chủ</a>
        </div>
        <!-- /.navbar-header -->

        <ul class="nav navbar-top-links navbar-right">
            <!-- /.dropdown -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">

                    <li><i class="fa fa-user fa-fw"></i>
                        {{ userLogin.name }}
                    </li>
                    <li><a href="#"><i class="fa fa-gear fa-fw"></i>Đổi mật khẩu</a>
                    </li>
                    <li class="divider"></li>
                    <li><a @click="logoutNow()"><i class="fa fa-sign-out fa-fw"></i>-Đăng xuất-</a>
                    </li>

                </ul>
                <!-- /.dropdown-user -->
            </li>
            <!-- /.dropdown -->
        </ul>
        <!-- /.navbar-top-links -->

        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse">
                <ul class="nav" id="side-menu">
                    <li class="sidebar-search">
                        <div class="input-group custom-search-form">
                            <input type="text" class="form-control" placeholder="Search...">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                        <!-- /input-group -->
                    </li>
                    <li>
                        <router-link :to="{ name: 'admin-index', params: {} }"><i class="fa fa-dashboard fa-fw"></i>Dashboard</router-link>
                    </li>
                    <li>
                        <a><i class="fa fa-cube fa-fw"></i>Phân quyền<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
<!--                                <router-link tag="a" :to="{ name: 'role', params: {} }" >Chức vụ</router-link>-->
                            </li>
                            <li>
<!--                                <router-link tag="a" :to="{ name: 'permission_detail', params: {} }" >Quyền</router-link>-->
                            </li>
                        </ul>
                        <!-- /.nav-second-level -->
                    </li>
                    <li>
                        <router-link tag="a" :to="{ name: 'admin-category', params: {} }" >Thể loại</router-link>
                    </li>
                    <li>
                        <a><i class="fa fa-bar-chart-o fa-fw"></i>Thương hiệu<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a>Danh sách</a>
                            </li>
                            <li>
                                <a>Thêm</a>
                            </li>
                        </ul>
                        <!-- /.nav-second-level -->
                    </li>
                    <li>
                        <a><i class="fa fa-bar-chart-o fa-fw"></i>Test<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
<!--                                <router-link tag="a" :to="{ name: 'permission', params: {} }">Test not found</router-link>-->
                            </li>

                        </ul>
                        <!-- /.nav-second-level -->
                    </li>
                    <li>
                        <a href="admin/theloai/danhsach"><i class="fa fa-bar-chart-o fa-fw"></i>Hệ điều hành<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="admin/hedieuhanh/danhsach">Danh sách</a>
                            </li>
                            <li>
                                <a href="admin/hedieuhanh/them">Thêm</a>
                            </li>
                        </ul>
                        <!-- /.nav-second-level -->
                    </li>
                    <li>
                        <a href="admin/theloai/danhsach"><i class="fa fa-bar-chart-o fa-fw"></i>Ram<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="admin/ram/danhsach">Danh sách</a>
                            </li>
                            <li>
                                <a href="admin/ram/them">Thêm</a>
                            </li>
                        </ul>
                        <!-- /.nav-second-level -->
                    </li>

                    <li>
                        <a href="#"><i class="fa fa-cube fa-fw"></i>Sản phẩm<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="admin/sanpham/danhsach">Danh sách</a>
                            </li>
                            <li>
                                <a href="admin/sanpham/them">Thêm</a>
                            </li>
                        </ul>
                        <!-- /.nav-second-level -->
                    </li>

                    <li>
                        <a href="admin/slide/danhsach"><i class="fa fa-bar-chart-o fa-fw"></i>Slide<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="admin/slide/danhsach">Danh sách</a>
                            </li>
                            <li>
                                <a href="admin/slide/them">Thêm</a>
                            </li>
                        </ul>
                        <!-- /.nav-second-level -->
                    </li>

                            <li>
                                <a href="admin/user/danhsach"><i class="fa fa-users fa-fw"></i>User<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="admin/user/danhsach">Danh sách</a>
                                    </li>
                                    <li>
                                        <a href="admin/user/them">Thêm</a>
                                    </li>
                                </ul>
                                <!-- /.nav-second-level -->
                            </li>

                </ul>
            </div>
            <!-- /.sidebar-collapse -->
        </div>

        <!-- /.navbar-static-side -->
    </nav>

  </div>

</template>

<script>
    import { mapState } from 'vuex';
export default {
    data() {
        return{

        }
    },
    computed:{
        ...mapState('userStore',['userLogin']),
    },
    methods:{
        logoutNow(){
            this.$Progress.start();
            var currentUrl = this.$router.currentRoute.path;
            console.log(currentUrl);
            var _this = this;
            this.$store.dispatch('userStore/hasLogout').then(result=>{
                _this.$router.push({path : '/admin/login',query : {redirect : currentUrl}});
                _this.$Progress.finish();
            }).catch(e=>{
                _this.$Progress.finish();
                alert("Something is wrong : "+e);
            })

        }
    }
}
</script>

<style scoped>
</style>
