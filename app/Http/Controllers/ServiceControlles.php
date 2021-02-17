<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceControlles extends Controller
{
    public function index()
    {
        return Inertia::render('Pages/Services/Services');
    }
}
