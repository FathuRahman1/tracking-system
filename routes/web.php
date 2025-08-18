<?php

use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
Route::get('login', function () {
    return Inertia::render('login');
})->name('login');
Route::post('login', [LoginController::class, 'Login'])->name('login.post');
Route::get('logout', [LoginController::class, 'Logout'])->name('logout');
Route::get('dashboard', function () {
    return Inertia::render('dashboard', [
        'flash' => [
            'status' => session('status'),
            'success' => session('success'),
            'error' => session('error'),
        ],
    ]);
})->name('dashboard');
