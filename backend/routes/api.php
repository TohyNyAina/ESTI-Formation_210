<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\testlaraController;
use App\Http\Controllers\tarifController;
use App\Http\Controllers\messageController;
use App\Http\Controllers\dateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group whicproudih
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware(['cors'])->group(function () {
//     Route::post('/hogehoge', 'Controller@hogehoge');
// });

Route::resource('user',UserController::class);
Route::resource('testlara',testlaraController::class);
Route::resource('tarif',tarifController::class);
Route::resource('message',messageController::class);
Route::resource('date',dateController::class);
