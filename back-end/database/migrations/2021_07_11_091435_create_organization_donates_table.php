<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationDonatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization_donates', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('money',10,2);
            $table->string('payment_method');
            $table->date('created_at');
            $table->string('your_name');
            $table->string('email');
            $table->char('phone',12);
            $table->timestamps();
            $table->integer('id_role')->unsigned();

        });
        Schema::table('human_donation', function($table) {
            $table->foreign('id_role')->references('id')->on('human_resource');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organization_donates');
    }
}
