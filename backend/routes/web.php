<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\testlaraController;
use App\Http\Controllers\tarifController;
use App\Http\Controllers\messageController;
use App\Http\Controllers\dateController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });s

Route::get("/view", [UserController::class,"index"]);
Route::get("/view", [testlaraController::class,"index"]);
Route::get("/view", [tarifController::class,"index"]);
Route::get("/view", [messageController::class,"index"]);
Route::get("/view", [dateController::class,"index"]);