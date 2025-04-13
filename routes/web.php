<?php

use App\Http\Controllers\ComboController;
use App\Http\Controllers\ServiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'services' => \App\Models\Service::all(),
        'combos' => \App\Models\Combo::all(),
    ]);
});

Route::middleware(['auth:sanctum', config('jetstream.auth_session'),])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::prefix('admin')
        ->name('admin.')
        ->group(function () {
            Route::resource('users', Admin\UserController::class);
        });

    Route::get('/services/get-list', [ServiceController::class, 'getList'])->name('services.get-list');
    Route::resource('/services', ServiceController::class);
    Route::resource('/combos', ComboController::class);
});
