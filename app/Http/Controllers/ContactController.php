<?php

namespace App\Http\Controllers;

use App\Http\Requests\RqContacto;
use App\Models\User;
use App\Notifications\NotyContacto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Pages/Contact/Contact');
    }

    public function send(RqContacto $request)
    {
        $user= new User([
            'email'=>'info@persontechnology.com'
        ]);	
		$data = array('email' => $request->email,'nombre'=>$request->nombre,'asunto'=>$request->asunto,'mensaje'=>$request->mensaje );
		$user->notify(new NotyContacto($data));
    	$request->session()->flash('success',' Person Technology te da la bienvenida. Intentaremos responderte lo antes posible.');
    	return Redirect::back();
    }
}
