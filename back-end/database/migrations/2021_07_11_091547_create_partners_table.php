<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartnersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partners', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('name');
            $table->string('content');
            $table->string('image');
            $table->string('address');
            $table->string('email');
            $table->string('notification');
            $table->string('link');
            $table->integer('id_url');
            $table->timestamps();
        });

        Schema::table('partners',function($table){
            $table->foreign('id_url')->references('id')->on('gallerry_image');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partners');
    }
}
