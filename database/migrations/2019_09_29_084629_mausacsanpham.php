<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Mausacsanpham extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('mausacsanpham', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_sanpham')->unsigned();
            $table->foreign('id_sanpham')->references('id')->on('sanpham');
            $table->integer('id_mausac')->unsigned();
            $table->foreign('id_mausac')->references('id')->on('mausac');
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
