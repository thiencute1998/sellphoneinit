<template>
  <div class="header">
    <!--header area start-->

        <!--Offcanvas menu area start-->
        <div class="off_canvars_overlay">

        </div>
        <header>
            <div class="main_header">
                <!--header top start-->
                <div class="header_top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-4 col-md-4">
                                <div class="header_account">
                                   Trường ĐH công nghiệp Hà Nội -KTPM1 - K11- Nhóm 1
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-9">
                                <div class="top_right text-right">
                                    <div class="header_support">
                                        <p><i class="icon ion-android-alarm-clock"></i> Mở cửa 24h/7 hằng ngày - Hỗ trợ: 0382788384 </p>
                                    </div>
                                    <div class="header_account">
                                        <ul>


                                            <li class="top_links"><a><i class="ion-gear-a"></i> Cài đặt <i class="ion-chevron-down"></i></a>
                                                <ul class="dropdown_links">
                                                    @if(Auth::check())
                                                    @if(Auth::user()->role==1)
                                                    <li><a>Quản trị</a></li>
                                                    @endif
                                                    <li><a >Đổi mật khẩu</a></li>
                                                    <li><a >Đăng xuất </a></li>

                                                    @else
                                                    <li class="wishlist"><a><i class="icon ion-clipboard"></i> Đăng nhập </a></li>
                                                    <li class="wishlist"><a> Đăng kí </a></li>
                                                    @endif
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--header top start-->
                <!--header middel start-->
                <div class="header_middle sticky-header">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-6">
                                <div class="logo">
                                    <a ><img src="asset/assets/img/logo/logo.png" alt=""></a>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-12">
                                <div class="main_menu menu_position text-right">
                                    <nav>
                                        <ul>
                                            <li><a class="active">Home</a>

                                            </li>
                                            <li><a> Liên hệ chúng tôi</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!--header middel end-->
                <!--header bottom satrt-->
                <div class="header_bottom header_bottom_two">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-12">
                                <div class="categories_menu">
                                    <div class="categories_title">
                                        <h2 class="categori_toggle">Danh mục</h2>
                                    </div>
                                    <div class="categories_menu_toggle">
                                        <ul>
                                          <!--
                                          List category
                                          -->
                                            <li><a></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-6">
                                <div class="bottom_right">
                                    <div class="search_container">
                                       <form action="#" method="get">

                                            <div class="search_box">
                                                <input placeholder="Tìm điện thoại..." type="text" name="key">
                                                <button type="submit">Tìm kiếm</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="mini_cart_wrapper">
                                        <a href="javascript:void(0)" style="width:110%;">
                                           <span class="cart_icon">
                                               <i class="ion-android-cart"></i>
                                           </span>

                                                <span class="cart_title">
                                                    <span class="cart_quantity"> sản phẩm</span>
                                                    <span class="cart_price"><sup>đ</sup></span>
                                                </span>

                                                <span class="cart_title">
                                                    <span class="cart_quantity">Giỏ hàng rỗng</span>

                                                </span>

                                        </a>

                                        <!--mini cart-->

                                         <div class="mini_cart">
                                            <div class="mini_cart_inner">
                                                <!--
                                                    <div class="cart_item">
                                                    <div class="cart_img">
                                                        <a ><img src="upload/sanpham/" alt=""></a>
                                                    </div>
                                                        <div class="cart_info">
                                                            <a></a>
                                                            <p>Số lượng:  X <span> <sup>đ</sup> </span></p>
                                                        </div>
                                                        <div class="cart_remove">
                                                            <a><i class="ion-android-close"></i></a>
                                                        </div>
                                                    </div>

                                                    list products
                                                -->
                                                <div class="mini_cart_table">
                                                    <div class="cart_total">
                                                        <span>Tổng tiền:</span>
                                                        <span class="price"><sup>đ</sup></span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="mini_cart_footer">
                                               <div class="cart_button">
                                                    <a>Xem giỏ hàng</a>
                                                </div>

                                            </div>

                                        </div>

                                        <!--mini cart end-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--header bottom end-->
            </div>
        </header>
        <!--header area end-->
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>
</style>
