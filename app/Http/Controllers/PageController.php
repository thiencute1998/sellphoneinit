<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SanPham;
use App\TheLoai;
use DB;
use App\HoaDonChiTiet;
use App\Slide;
class PageController extends Controller
{
    //

    public function index(){
        $arr_types = array();
        $dts_moinhat = SanPham::orderBy('created_at', 'DESC')->where('trangthai',1)->get();
        $dts_pinkhung = SanPham::orderBy('dungluongpin', 'DESC')->where('trangthai',1)->get();
        // $dts_banchay = HoaDonChiTiet::paginate(8);
        // $slide = Slide::where('trangthai','1')->first();
        
        // array_push($arr_types,$dts_moinhat,$dts_pinkhung);
        $arr_types['Latest Phone'] = $dts_moinhat;
        $arr_types['Great battery Phone'] = $dts_pinkhung;
        return response()->json($arr_types);
    	// return view('viewer.page.trangchu',['dts_moinhat'=>$dts_moinhat,'dts_pinkhung'=>$dts_pinkhung,'dts_banchay'=>$dts_banchay,'slide'=>$slide]);
    }

    public function getChiTiet($id){

        $sanpham = SanPham::find($id);

        $splqs = SanPham::where('id_theloai',$sanpham->id_theloai)->where('trangthai',1)->get();
        return view('viewer.page.chitiet',['sanpham'=>$sanpham,'splqs'=>$splqs]);
    }

    public function getTim(Request $request){
        $sptks = SanPham::orderBy('created_at', 'DESC')->where('trangthai',1)->where('ten','like','%'.$request->key.'%')->get();
        $name = $request->key;
        return view('viewer.page.timkiem',['sptks'=>$sptks,'name'=>$name]);
    }

    public function getContact(){

        return view('viewer.page.contact');
    }
}

?>
