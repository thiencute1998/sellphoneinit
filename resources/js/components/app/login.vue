<template>
  <div class="limiter">
    <div class="container-login100" style="background-image: url('log/images/img-01.jpg');">
      <div class="wrap-login100 p-t-190 p-b-30">
        <form class="" @submit.prevent="checkLogin()" method="post">
          <div class="login100-form-avatar">
            <img src="log/images/avatar-01.jpg" alt="AVATAR">
          </div>
            <div class="error-login" v-if="error_email_password">Email hoặc mật khẩu không chính xác</div>
            <span class="login100-form-title p-t-20 p-b-45">
                    </span>
          <div class="wrap-input100 validate-input m-b-10" >
            <input class="input100" type="text" v-model="username" placeholder="Email">
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-user"></i>
            </span>
          </div>

          <div class="wrap-input100 validate-input m-b-10" >
            <input class="input100" type="password" v-model="pass" placeholder="Mật khẩu" value="123">
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock"></i>
            </span>
          </div>

          <div class="container-login100-form-btn p-t-10">
            <button class="login100-form-btn" type="submit">
              Đăng nhập
            </button>
          </div>

          <div class="text-center w-full">
            <a class="txt1">
              Đăng ký tài khoản
              <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    // import { mapActions } from 'vuex';
export default {
  data(){
    return {
        username : 'admin@gmail.com',
        pass : '123',
        error_email_password : false,
    }
  },
  mounted() {

      const plugin = document.createElement("script");
      plugin.setAttribute(
        "src",
        "/log/js/main.js"
      );
      plugin.async = true;
      document.body.appendChild(plugin);
    },
    methods:{
      // ...mapActions('userStore',['hasLogin']),
      checkLogin(){
        this.$Progress.start();
        var currentQuery = this.$route.query.redirect;
        var user = {
            email : this.username,
            password : this.pass
        };
          var _this = this;
          this.$store.dispatch('userStore/hasLogin',user).then(result=>{
              if(typeof result.error !== 'undefined'){
                  this.error_email_password = true;
                  _this.$Progress.finish();
                  console.log(result.error);
                  return;
              }
              if (typeof currentQuery !== 'undefined') {
                  this.error_email_password = false;
                  _this.$router.push(currentQuery);
              }
              else{
                  this.error_email_password = false;
                  _this.$router.push('/admin');
              }
              _this.$Progress.finish();
          }).catch(e=>{
                alert('Login failed')
              // console.log(e);

          })
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../asset/log/vendor/bootstrap/css/bootstrap.min.scss";
@import "../../../asset/log/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
@import "../../../asset/log/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
@import "../../../asset/log/vendor/animate/animate.css";
@import "../../../asset/log/vendor/css-hamburgers/hamburgers.min.css";
@import "../../../asset/log/css/util.scss";
@import "../../../asset/log/css/main.css";

    .error-login{
        color:red;
    }
</style>
