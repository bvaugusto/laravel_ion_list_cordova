<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => 'cors'], function(){
    Route::get('api/tasks', 'TaskController@index');
    Route::get('api/tasks/{id}/delete', 'TaskController@destroy');
    Route::get('api/tasks/{id}/chage', 'TaskController@changeStatus');
});