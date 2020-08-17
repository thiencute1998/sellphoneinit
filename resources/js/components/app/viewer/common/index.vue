<template>
  <div class="toang">


    <!--slider area start-->
        <section class="slider_section slider_s_two mb-50">

            <div class="slider_area owl-carousel">
                <div class="single_slider d-flex align-items-center" data-bgimg="asset/assets/img/slider/slider2.jpg">
                    <div class="container">
                       <div class="row">
                           <div class="col-12">
                               <div class="slider_content">
                                    <h1>Shop Rusu <br>  2019</h1>
                                   <p style="font-size: 20px">Nhân dịp kỉ niệm 2 năm thành lập Shop </p>
                                    <a class="button">MUA NGAY</a>
                                </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>

        </section>
        <!--slider area end-->

        <!--banner area start-->
        <div class="banner_area mb-45">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <figure class="single_banner">
                            <div class="banner_thumb">
                                <a><img src="asset/assets/img/bg/banner6.jpg" alt=""></a>
                            </div>
                        </figure>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <figure class="single_banner">
                            <div class="banner_thumb">
                                <a><img src="asset/assets/img/bg/banner7.jpg" alt=""></a>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <!--banner area end-->

        <!--product area start-->
        <div class="product_area product_style2 mb-15" v-for= "(itemtypes,title,i) in listProductTypes" :key="i">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                       <div class="product_header">
                            <div class="section_title">
                               <h2>{{title}}</h2>

                            </div>
                            <div class="product_tab_btn">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="Video" role="tabpanel">
                        <div class="row">
                            <div class="product_carousel product_style product_column4 owl-carousel">
                                <!-- @foreach($dts_moinhat as $dt_moinhat) -->
                                <div class="col-lg-3" v-for="(itemproduct, j) in itemtypes" :key="j">
                                    <article class="single_product">
                                            <figure>
                                               <div class="product_name">
                                                   <h4><a href="chitiet">{{itemproduct.ten}} - {{itemproduct.cpu}}</a></h4>
                                               </div>
                                               <div class="product_rating">

                                               </div>

                                                <div class="product_thumb">
                                                    <a class="primary_img" href="chitiet"><img :src="getImg(itemproduct.hinhanh)" alt=""></a>
                                                    <div class="label_product">
                                                        <!-- @if($dt_moinhat->gia_sale != 0) -->
                                                            <span class="label_sale" v-if="itemproduct.gia_sale != '0'">Sale!</span>
                                                        <!-- @endif -->
                                                    </div>
                                                    <!-- <div class="quick_button">
                                                        <a href="#" data-toggle="modal" data-target="#modal_box"  title="Xem nhanh"> Xem nhanh</a>
                                                    </div> -->
                                                </div>
                                                <div class="product_footer">
                                                    <div class="price_box" style="text-align:center">
                                                        <!-- @if($dt_moinhat->gia_sale != 0) -->
                                                        <span v-if="itemproduct.gia_sale != '0'">

                                                          <span class="old_price" >{{itemproduct.gia | number('0,0') }}<sup>đ</sup></span>

                                                          <span class="current_price" >{{itemproduct.gia_sale | number('0,0')}}<sup>đ</sup></span>&nbsp
                                                        </span>

                                                        <!-- @else -->
                                                            <span class="current_price" v-else>{{itemproduct.gia | number('0,0')}}<sup>đ</sup></span>&nbsp
                                                        <!-- @endif -->

                                                    </div>
                                                    <div class="action_links">
                                                         <ul>
                                                            <li class="add_to_cart"><a href="#" title="Chọn mua">Thêm vào giỏ hàng</a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </figure>
                                        </article>
                                </div>
                                <!-- @endforeach -->

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!--product area end-->

        <!--shipping area start-->
        <div class="shipping_area shipping_two mb-50 mt-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="single_shipping">
                            <div class="shipping_icone">
                                <img src="asset/assets/img/about/shipping1.png" alt="">
                            </div>
                            <div class="shipping_content">
                                <h4>Miễn phí vận chuyển</h4>
                                <p>Giảm 40% cho hóa đơn có giá trị trên 20 triệu đồng</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single_shipping">
                            <div class="shipping_icone">
                                <img src="asset/assets/img/about/shipping2.png" alt="">
                            </div>
                            <div class="shipping_content">
                                <h4>Hỗ trợ 24/7</h4>
                                <p>Hỗ trợ 24 giờ trên ngày</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single_shipping">
                            <div class="shipping_icone">
                                <img src="asset/assets/img/about/shipping3.png" alt="">
                            </div>
                            <div class="shipping_content">
                                <h4>Trả tiền</h4>
                                <p>Đảm bảo hoàn lại tiền nếu sản phẩm gặp vấn đề sau 7 ngày</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single_shipping">
                            <div class="shipping_icone">
                                <img src="asset/assets/img/about/shipping4.png" alt="">
                            </div>
                            <div class="shipping_content">
                                <h4>Giảm giá thành viên</h4>
                                <p>Giảm giá 10% cho khách hàng là thành viên trên 2 năm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--shipping area end-->

  </div>
</template>

<script>
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)
export default {
  data(){
    return {
      listProductTypes : [],
      listProducts : [],
      img : '',
    }
  },
  created(){
    axios.get('http://127.0.0.1:8000/api/index')
    .then(response=>{
      this.listProductTypes =response.data;
      console.log(response.data);

    })
  },
  methods :{
    getImg(name){
      return "image/"+name;
    }
  }
}
</script>

<style scoped>
</style>
