<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use Illuminate\Support\Facades\Route;
use Modules\App\Http\Controllers\Auth\LoginController;

Route::post('auth/login', [LoginController::class, 'login']);

Route::post('auth/logout', [LoginController::class, 'logout']);
