<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Comment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('comment', function (Blueprint $table) {
            $table->increments('id');
            $table->string('noidung');
            $table->integer('id_user')->unsigned();
            $table->foreign('id_user');
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
