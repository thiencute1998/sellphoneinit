<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Hoadonchitiet extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('hoadonchitiet', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ten');
            $table->integer('id_hoadon')->unsigned();
            $table->foreign('id_hoadon')->references('id')->on('hoadon');
            $table->integer('id_sanpham')->unsigned();
            $table->foreign('id_sanpham')->references('id')->on('sanpham');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
