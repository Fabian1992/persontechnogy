<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $alfa=[];
        for ($i=1; $i <12 ; $i++) { 
            
            $tem=[
                'id'=>$i,
                'img'=>"/storage/Alfa/".$i.".png"
            ];         
            $alfa[]=$tem;
        }
       
        return Inertia::render('Pages/Gallery/Index',[
            'alfa'=>$alfa,
        ]);
    }
}
