<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestlarasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('testlaras', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('categorie');
            $table->string('niveau');
            $table->string('accompagnement');
            $table->string('supports');
            $table->string('outilsformation');
            $table->string('logiciel');
            $table->string('plateformes');
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
        Schema::dropIfExists('testlaras');
    }
}
