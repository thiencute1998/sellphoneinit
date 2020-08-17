<template>
  <div class="wrapper">
    <Header>
    </Header>
    <router-view></router-view>

    <Footer>
    </Footer>
  </div>

</template>

<script>
import Header from './header';
import Footer from './footer';
export default {

  components :{
    Header,
    Footer
  },
  mounted(){

  },
  watch : {
    $route (to, from){
      this.$Progress.start();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../asset/admin_asset/bower_components/bootstrap/dist/css/bootstrap.min.css";
@import "../../../../../asset/admin_asset/bower_components/metisMenu/dist/metisMenu.min.css";
@import "../../../../../asset/admin_asset/dist/css/sb-admin-2.css";
@import "../../../../../asset/admin_asset/bower_components/font-awesome/css/font-awesome.min.css";
@import "../../../../../asset/admin_asset/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css";
@import "../../../../../asset/admin_asset/bower_components/datatables-responsive/css/dataTables.responsive.css";

</style>
