<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
use Log;

class TodoController extends Controller
{

    public function index($user_id)
    {
        $todos = Todo::where('user_id', $user_id)->get();
        return response()->json($todos);
    }

    public function store(Request $request)
    {
        Todo::create($request->all());
        $response["status"] = "ok";
        return response()->json($response);
    }

    public function destroy($todo_id)
    {
        Todo::destroy($todo_id);
        $response["status"] = "ok";
        return response()->json($response);
    }
}

