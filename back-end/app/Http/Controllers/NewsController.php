<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewsModel;

class NewsController extends Controller
{
    public function index()
    {
        $news=NewsModel::get();
        return $news;
    }

   
    public function create()
    {
        //
    }
    
}
