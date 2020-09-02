import App from '../components/app/app';
import MasterAdmin from '../components/app/admin/layout/master';
import MasterViewer from '../components/app/viewer/layout/master';
import Login from '../components/app/login';
import ListCategory from '../components/app/admin/category/list';

import IndexPage from '../components/app/viewer/common/index';
import DetailProduct from '../components/app/viewer/common/productdetail';
import ListProductOfCategory from '../components/app/viewer/common/products';
import SearchProduct from '../components/app/viewer/common/searchproduct';
import OrderDetail from '../components/app/viewer/order/orderdetail';
import PageNotFound from '../components/app/error/404';
import Role from '../components/app/admin/permission/role';
import Permission from '../components/app/admin/permission/permission';
import HeaderAdmin from '../components/app/admin/layout/header';
import FooterAdmin from '../components/app/admin/layout/footer';
import DashBoardAdmin from '../components/app/admin/layout/dashboard';
import SearchCategoryAdmin from '../components/app/admin/category/search';
import LoginAdmin from '../components/app/login';

import TestRouter from '../components/app/viewer/common/test';
export const routes = [
  //   {
  //       path : '/404',
  //       name : 'not_found',
  //       components : {
  //           default : App,
  //           "error-hihi" : PageNotFound
  //       },
  //       meta : {
  //           title : 'Page not found'
  //       }
  //
  //   },
  //   {
  //   path : '/login',
  //   name : 'app_login',
  //   components : {
  //     default : App,
  //     "login-hihi" : Login
  //   },
  //   meta : {
  //     title : 'Login Page'
  //   }
  //
  // },
  //   {
  //   path : '/admin',
  //   name : 'admin_root',
  //   meta : {
  //     title : 'Admin Page'
  //   },
  //   components : {
  //     default : App,
  //     "admin-hihi" : MasterAdmin
  //   },
  //   children : [
  //     {
  //       path : 'category/list',name : 'list_category',component : ListCategory,meta : {title : 'List Categories'},
  //     },
  //     {
  //       path : 'category/create',name : 'create_category',component : CreateCategory,meta : {title : 'Create Category'}
  //     },
  //     {
  //       path : 'category/:id/edit',name : 'edit_category',component : EditCategory,meta : {title : 'Edit Category'}
  //     },
  //       {
  //         path : 'permission',name : 'permission',redirect : {name : 'not_found'},meta: {title : 'Page not found'},children : [
  //               {
  //                   path : 'role',name : 'role',component : Role,meta : {title : 'Role'}
  //               },
  //               {
  //                   path : 'permission',name : 'permission_detail',component : Permission,meta : {title : 'Permission'}
  //               }
  //           ]
  //       },
  //
  //   ]
  //   },
  //   {
  //   path : '/',
  //   name : 'user_index',
  //   components : {
  //     default : App,
  //     "viewer-hihi" : MasterViewer
  //   },
  //   children : [
  //     {
  //       path : '/',name : 'index_page',component : IndexPage,meta : {title : 'Index'}
  //     },
  //     {
  //       path : '/:id/detail',name : 'product_detail',component : DetailProduct,meta : {title : 'Detail product'}
  //     },
  //     {
  //       path : '/:id/category',name : 'products_of_category',component : ListProductOfCategory,meta : {title : 'Products of Category'}
  //     },
  //     {
  //       path : 'search',name : 'search_product',component : SearchProduct,meta : {title : 'Search product'}
  //     },
  //     {
  //       path : '/detail',name : 'order_detail',component : OrderDetail,meta : {title : 'Detail product'}
  //     },
  //   ]
  //   },
    { path: '*', redirect: {name : 'not_found'} },
    {path : '/',name : 'test',component : TestRouter,meta : {title : 'Tuan-dev-vue-laravel'}},
    {path : '/admin',component : MasterAdmin,children : [
            {
                path : '',name : 'admin-index',meta : {title : 'Admin dashboard'},components : {
                    default : DashBoardAdmin,
                    'header-admin' : HeaderAdmin,
                    'footer-admin' : FooterAdmin,
                }
            },
            {
                path : 'category',name : 'admin-category',meta : {title : 'Category'},components : {
                    default : ListCategory,
                    'header-admin' : HeaderAdmin,
                    'footer-admin' : FooterAdmin,
                },
                children : [
                    {
                        path : '/search',name : 'admin-category-search',component : SearchCategoryAdmin
                    }
                ]
            },
            {
                path : 'login',name : 'admin-login',meta : {title : 'Admin login'},component : LoginAdmin
            }

        ]}

]
