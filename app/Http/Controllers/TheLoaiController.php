<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Theloai;
use App\SanPham;

class TheLoaiController extends Controller
{
    public function getList(){
    	$theloai= TheLoai::orderBy('id','DESC')->paginate(5);
      return response()->json($theloai);
    }
    public function getThem(){
    	return view('admin.theloai.them');
    }

    public function postCreate(Request $request){

    	// $this->validate($request,[
    	// 		'ten'=>'required|min:3|max:100|unique:TheLoai,ten'
	    // 	],
	    // 	[
      //
	    // 		'ten.required'=>'Bạn chưa nhập tên thể loại',
	    // 		'ten.unique'=>'Tên thể loại đã tồn tại',
	    // 		'ten.min'=>'Tên thể loại phải có độ dài từ 3 đến 100 kí tự',
	    // 		'ten.max'=>'Tên thể loại phải có độ dài từ 3 đến 100 kí tự',
	    // ]);
 // $theloai->tenkhongdau = str_slug($request->ten,' ');
  // $theloai->trangthai = $request->rdoTrangThai;
	    $theloai = new TheLoai;
	    $theloai->ten = $request->ten;

	    $theloai->ghichu = $request->ghichu;

            $file = $request->file;

            $hinh = str_random(4)."_".$file->getClientOriginalExtension();
            while(file_exists("upload/theloai/".$file->getClientOriginalExtension())){
                $hinh = str_random(4)."_".$file->getClientOriginalExtension();
            }
            $file->move("upload/theloai",$hinh);
            $theloai->hinhanh = $hinh;

	    $theloai->save();

	    return response()->json($theloai);
    }

    public function postEdit($id,Request $request){
      $theloai =TheLoai::find($id);
	    $theloai->ten = $request->ten;
	    $theloai->ghichu = $request->ghichu;
      $file = $request->file;
      $hinh = str_random(4)."_".$file->getClientOriginalExtension();
      while(file_exists("upload/theloai/".$file->getClientOriginalExtension())){
          $hinh = str_random(4)."_".$file->getClientOriginalExtension();
      }
      $file->move("upload/theloai",$hinh);
      $theloai->hinhanh = $hinh;
	    $theloai->save();
	    return response()->json("Edit successed");
    }

    public function getSua($id){
    	$theloai = TheLoai::find($id);
    	return view('admin/theloai/sua',['theloai'=>$theloai]);
    }

    public function postSua(Request $request,$id){
    	$theloai=TheLoai::find($id);
    	$this->validate($request,[
    			'ten'=>'required|min:3|max:100|unique:TheLoai,ten'
    		],
    		[
    			'ten.required'=>'Bạn chưa nhập tên thể loại',
    			'ten.unique'=>'Tên thể loại đã tồn tại',
    			'ten.min'=>'Tên thể loại phải có độ dài từ 3 đến 100 kí tự',
	    		'ten.max'=>'Tên thể loại phải có độ dài từ 3 đến 100 kí tự',
    		]);

    	$theloai->ten = $request->ten;
    	if($request->hasFile('hinhanh')){
            $file = $request-> file('hinhanh');
            $duoi = $file -> getClientOriginalExtension();
            if($duoi != 'jpg' && $duoi !='png'  && $duoi != 'jpeg'){
                return redirect('admin/user/them')->with('thongbao','Bạn chỉ được chọn file có đuôi jpg,png,jpeg! ');
            }
            // $file = $request->file('sanpham');
            $name = $file->getClientOriginalName();
            $hinh = str_random(4)."_".$name;
            while(file_exists("upload/theloai/".$hinh)){
                $hinh = str_random(4)."_".$name;
            }
            $file->move("upload/theloai",$hinh);
            $theloai->hinhanh = $hinh;
        }else{
            $theloai->hinhanh = "";
        }
    	// $theloai->tenkhongdau = str_slug($request->ten,' ');
    	$theloai->ghichu = $request->ghichu;
    	// $theloai->trangthai = $request->rdoTrangThai;
    	$theloai->save();

    	return redirect('admin/theloai/sua/'.$id)->with('thongbao','Sửa thành công');
    }

    public function getXoa($id){
    	$theloai = TheLoai::find($id);

    	// $theloai->trangthai = 0;
    	$theloai->save();
    	return redirect('admin/theloai/danhsach')->with('thongbao','Bạn đã xóa thành công');
    }

    public function deleteCategory($id){
    	$theloai = TheLoai::find($id);
    	$theloai->delete();
    	return response('deleted success!!');
    }

    public function findCategory($id){
      $theloai = TheLoai::find($id);
    	return response($theloai);
    }

    public function getViewerDanhSach($id){
        $dts_theloai = SanPham::where('id_theloai',$id)->paginate(8,['*'], 'page');
        $the_loai = TheLoai::find($id);
        return view('viewer.theloai.danhsach',['dts_theloai'=>$dts_theloai,'the_loai'=>$the_loai]);
    }
}
