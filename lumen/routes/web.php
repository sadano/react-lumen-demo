<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->get(env('VERSION').'/todos/{user_id}', 'TodoController@index');
$router->post(env('VERSION').'/todos', 'TodoController@store');
$router->delete(env('VERSION').'/todos/{todo_id}', 'TodoController@destroy');