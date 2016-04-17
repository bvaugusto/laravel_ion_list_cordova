<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Task;

class TaskController extends Controller
{
    public function index(){
    	$tasks = Task::all();
    	return response()->json($tasks);
    }

    public function destroy($id){
    	return response()->json(Task::destroy($id));
    }

    public function changeStatus($id){
    	$tasks = Task::find($id);
    	$tasks->status = !$tasks->status;
    	$tasks->save();

    	return response()->json($tasks);
    }
}
