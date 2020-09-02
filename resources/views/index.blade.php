<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <base href="{{ asset('') }}">
    <meta charset="utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Toang</title>
      <style type="text/css">
          body{
              overflow: scroll !important;
          }
      </style>
  </head>
  <body>
    <div id="app">
        <vue-progress-bar></vue-progress-bar>
        <router-view></router-view>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
    <script src="admin_asset/bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="admin_asset/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="admin_asset/bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="admin_asset/dist/js/sb-admin-2.js"></script>

{{--    <script src="vuelidate/dist/vuelidate.min.js"></script>--}}

    <!-- DataTables JavaScript -->
    <script src="admin_asset/bower_components/DataTables/media/js/jquery.dataTables.min.js"></script>
    <script src="admin_asset/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>
  </body>
</html>
