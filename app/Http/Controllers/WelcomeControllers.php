<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeControllers extends Controller
{
    public function index()
    {
        return Inertia::render('Pages/Welcome/Welcome',[
            'ok'=>'Holalaa'
        ]);
    }
}
