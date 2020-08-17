<template>
  <div class="master">
    <Header>

    </Header>
    <router-view></router-view>
    This is master of user
    <Footer>

    </Footer>
    <p>Time now : {{hihi}}</p>
    <!-- <div class="">
      {{change}}
    </div>
    <button type="button" class="btn btn-danger" @click="changeMessage">Change message</button> -->
  </div>
</template>

<script>


import Header from './header';
import Footer from './footer';

import '../../../../../asset/asset/assets/js/jquery.js';

export default {

  components :{
    Header,
    Footer
  },
  data(){
    return {
        message : "My name is Tuan",
    }
  },
  computed : {
    hihi(){
      return Date.now();
    },
    change(){
       return this.message;
    }

  },
  watch : {
    change(){
      console.log("Message changed!!");
    }
  },
  methods : {
    changeMessage(){
      this.message = "Your name is Tran The My"+ new Date();
    }
  }
}
</script>

<style scoped>
  /* @import '../../../../../asset/asset/assets/css/plugins.css'; */
  @import '../../../../../asset/asset/assets/css/style.css';
</style>
