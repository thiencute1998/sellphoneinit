<template>
    <div class="master">
        <Header>

        </Header>
        <Index></Index>
        <Footer>

        </Footer>


    </div>
</template>

<script>
    import Header from '../layout//header';
    import Footer from '../layout/footer';
    import Index from './index';

    import '../../../../../asset/asset/assets/js/jquery.js';

    export default {
        components :{
            Header,
            Footer,
            Index,
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
