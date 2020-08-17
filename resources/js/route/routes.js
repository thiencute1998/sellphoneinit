import App from '../components/app/app';
import MasterAdmin from '../components/app/admin/layout/master';
import MasterViewer from '../components/app/viewer/layout/master';
import Login from '../components/app/login';
import ListCategory from '../components/app/admin/category/list';
import CreateCategory from '../components/app/admin/category/create';
import EditCategory from '../components/app/admin/category/edit';
import IndexPage from '../components/app/viewer/common/index';
import DetailProduct from '../components/app/viewer/common/productdetail';
import ListProductOfCategory from '../components/app/viewer/common/products';
import SearchProduct from '../components/app/viewer/common/searchproduct';
import OrderDetail from '../components/app/viewer/order/orderdetail';
export const routes = [
  {
    path : '/login',
    name : 'app_login',
    components : {
      default : App,
      "login-hihi" : Login
    },
    meta : {
      title : 'Login Page'
    }

  },
  {
    path : '/admin',
    name : 'admin_root',
    meta : {
      title : 'Admin Page'
    },
    components : {
      default : App,
      "admin-hihi" : MasterAdmin
    },
    children : [
      {
        path : 'category/list',name : 'list_category',component : ListCategory,meta : {title : 'List Categories'},
      },
      {
        path : 'category/create',name : 'create_category',component : CreateCategory,meta : {title : 'Create Category'}
      },
      {
        path : 'category/:id/edit',name : 'edit_category',component : EditCategory,meta : {title : 'Edit Category'}
      },

    ]
  },
  {
    path : '/',
    name : 'user_index',

    components : {
      default : App,
      "viewer-hihi" : MasterViewer
    },
    children : [
      {
        path : '/',name : 'index_page',component : IndexPage,meta : {title : 'Index'}
      },
      {
        path : '/:id/detail',name : 'product_detail',component : DetailProduct,meta : {title : 'Detail product'}
      },
      {
        path : '/:id/category',name : 'products_of_category',component : ListProductOfCategory,meta : {title : 'Products of Category'}
      },
      {
        path : 'search',name : 'search_product',component : SearchProduct,meta : {title : 'Search product'}
      },
      {
        path : '/detail',name : 'order_detail',component : OrderDetail,meta : {title : 'Detail product'}
      },
    ]
  },

]
