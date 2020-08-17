<template>
  <div class="limiter">

    <div class="container-login100" style="background-image: url('log/images/img-01.jpg');">
      <div class="wrap-login100 p-t-190 p-b-30">
        <form class="" @submit.prevent="checkLogin()" method="post">
          <div class="login100-form-avatar">
            <img src="log/images/avatar-01.jpg" alt="AVATAR">
          </div>
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
export default {
  data(){
    return {
        username : 'admin@gmail.com',
        pass : '123',
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
      checkLogin(){
        this.$Progress.start();
        axios.post('http://127.0.0.1:8000/api/checkLogin',{username : this.username,pass : this.pass})
        .then(response=>{
          console.log(response.data);
          this.$router.push('/'+response.data);
          this.$Progress.finish();
        })
        .catch(e=>{
          this.$Progress.fail();
          alert("Failed : "+e);
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
</style>
