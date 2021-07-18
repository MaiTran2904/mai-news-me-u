<?php

use App\Http\Controllers\Admin\PageController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('index',[PageController::class,'getIndex']);


Route::get('/login', [PageController::class,'getAdmin']);
Route::post('/login',[PageController::class,'LoginAdmin']);


// Signup Admin
Route::get('/signup', function () {
    return view('Admin.Page.signup');
});
Route::post('/signup',[PageController::class,'addAdmin']);
Route::get('logout',[PageController::class,'Logout_admin']);



// Start contact
Route::get('contacts',[PageController::class,'getContact']);

// End Contact


Route::get('hihi',function(){
    return view('Admin.Introduction.introduction');
});


Route::get('uploadfile',[PageController::class,'getFile']);

Route::post('uploadfile',[PageController::class,'postFile']);

// Route::get('/signup', function () {
//     return view('Admin.Page.signup');
// });
// Route::get('/table', function () {
//     return view('Admin.Page.table');
// });
// Route::get('/blog', function () {
//     return view('Admin.Page.blog');
// });
// Route::get('/charts', function () {
//     return view('Admin.Page.chart');
// });
