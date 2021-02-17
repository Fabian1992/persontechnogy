<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutControllers extends Controller
{
    public function Index()
    {
       return Inertia::render('Pages/About/About');
    }
}
