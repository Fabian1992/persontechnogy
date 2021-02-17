<?php

use App\Http\Controllers\AboutControllers;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ServiceControlles;
use App\Http\Controllers\WelcomeControllers;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    // Artisan::call('cache:clear');
    // Artisan::call('config:clear');
    // Artisan::call('config:cache');
	// Artisan::call('storage:link');
	// Artisan::call('key:generate');
	// Artisan::call('migrate:fresh --seed');
// });
Route::get('/',[WelcomeControllers::class,'index'])->name('home');
Route::get('acerca-de-notros',[AboutControllers::class,'index'])->name('acerca');
Route::get('nuestros-servicios',[ServiceControlles::class,'index'])->name('servicios');
Route::get('gelleria',[GalleryController::class,'index'])->name('gallery');
Route::get('contactos',[ContactController::class,'index'])->name('contact');
Route::post('new-contactos',[ContactController::class,'send'])->name('new-contact');