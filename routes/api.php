<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('checkLogin','UserController@checkLogin');

Route::group(['prefix'=>'admin'],function(){

  Route::group(['prefix'=>'category'],function(){

    Route::get('list','TheLoaiController@getList');

    Route::post('create','TheLoaiController@postCreate');

    Route::delete('{id}/delete','TheLoaiController@deleteCategory');

    Route::get('{id}/find','TheLoaiController@findCategory');

    Route::post('{id}/edit','TheLoaiController@postEdit');

  });
});

Route::group(['prefix'=>'/'],function(){
  Route::get('/index','PageController@index');

});
