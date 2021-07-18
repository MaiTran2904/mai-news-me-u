<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Introduction
Route::get('/introductions','IntroduceController@header');
Route::resource('/introduction', IntroduceController::class);
// end Introduction


// Start Value

Route::resource('/values', ValueController::class);

//End Value

// Start Manager
Route::resource('/managers', ManagerController::class);
// End Manager

// Start contact
Route::resource('/contacts', ContactController::class);
//  End Contact

// Start news
Route::resource('/news', NewsController::class);
//  End news