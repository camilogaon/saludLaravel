<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\AuthController;
use App\Models\Article;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CarritoController;
use App\Http\Resources\ArticleResource;
use App\Models\Cliente;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\EspecializacionesController;
use App\Http\Controllers\ExamenController;
use App\Http\Controllers\examenesmedicosController;
use App\Http\Resources\ClienteResource;
use App\Models\Listaproductos;
use App\Http\Controllers\ListaproductosController;
use App\Http\Controllers\MedicamentosController;
use App\Http\Controllers\ServiciosController;
use App\Http\Controllers\VacunasController;
use App\Http\Controllers\VentaController;
use App\Http\Resources\CarritoResource;
use App\Http\Resources\EspecializacionesResource;
use App\Http\Resources\examenesmedicosResource;
use App\Http\Resources\ExamenResource;
use App\Http\Resources\ListaproductoResource;
use App\Http\Resources\MedicamentosResource;
use App\Http\Resources\ServiciosResource;
use App\Http\Resources\VacunasResource;
use App\Http\Resources\VentaResource;
use App\Models\Carrito;
use App\Models\Especializaciones;
use App\Models\Examen;
use App\Models\examenesmedicos;
use App\Models\medicamentos;
use App\Models\servicios;
use App\Models\vacunas;
use App\Models\Venta;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group([

    'middleware' => 'api',


], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('signup', [AuthController::class,'signup']);
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::get('/servicios', function (){
    return ServiciosResource::collection(servicios::all());
});

Route::get('/servicio/{idservicios}', function ($idservicios){
    return new ServiciosResource(servicios::findOrFail($idservicios));
});

Route::post('/servicios', [ServiciosController::class, 'store']);

Route::put('/servicio/{idservicios}', [ServiciosController::class, 'update']);

Route::delete('/servicio/{idservicios}', [ServiciosController::class, 'destroy']);



Route::get('/especializaciones', function (){
    return EspecializacionesResource::collection(Especializaciones::all());
});

Route::get('/especializacion/{idespecializaciones}', function ($idespecializaciones){
    return new EspecializacionesResource(Especializaciones::findOrFail($idespecializaciones));
});

Route::post('/especializaciones', [EspecializacionesController::class, 'store']);

Route::put('/especializacion/{idespecializacion}', [EspecializacionesController::class, 'update']);

Route::delete('/especializacion/{idespecializacion}', [EspecializacionesController::class, 'destroy']);


Route::get('/medicamentos', function (){
    return MedicamentosResource::collection(medicamentos::all());
    });
    Route::get('/medicamento/{idmedicamentos}', function ($idmedicamentos){
    return new MedicamentosResource(medicamentos::findOrFail($idmedicamentos));
    });
    Route::post('/medicamentos', [MedicamentosController::class, 'store']);

    Route::put('/medicamento/{idmedicamentos}', [MedicamentosController::class, 'update']);

    Route::delete('/medicamentos/{idmedicamentos}', [MedicamentosController::class, 'destroy']);



Route::get('/vacunas', function (){
    return VacunasResource::collection(vacunas::all());
    });
    Route::get('/vacuna/{idvacunas}', function ($idvacunas){
    return new VacunasResource(vacunas::findOrFail($idvacunas));
    });
    Route::post('/vacunas', [VacunasController::class, 'store']);

    Route::put('/vacuna/{idvacuna}', [VacunasController::class, 'update']);
    
    Route::delete('/vacuna/{idvacuna}', [VacunasController::class, 'destroy']);



    Route::get('/examenes', function (){
        return ExamenResource::collection(Examen::all());
    });

    Route::get('/examen/{idexamen}', function ($idexamen){
        return new ExamenResource(Examen::findOrFail($idexamen));
    });

    Route::post('/examenes', [ExamenController::class, 'store']);

    Route::put('/examen/{idexamen}', [ExamenController::class, 'update']);

    Route::delete('/examen/{idexamen}', [ExamenController::class, 'destroy']);




    Route::get('/carritos', function (){
        return CarritoResource::collection(Carrito::all());
    });

    Route::get('/carrito/{id_carrito}', function ($id_carrito){
        return new CarritoResource(Carrito::findOrFail($id_carrito));
    });

    Route::post('/carritos', [CarritoController::class, 'store']);

    Route::put('/carrito/{id_carrito}', [CarritoController::class, 'update']);

    Route::delete('/carrito/{id_carrito}', [CarritoController::class, 'destroy']);



    Route::get('/ventas', function (){
        return VentaResource::collection(Venta::all());
    });
    
    Route::get('/venta/{id_venta}', function ($id_venta){
        return new VentaResource(Venta::findOrFail($id_venta));
    });
    
    Route::post('/ventas', [VentaController::class, 'store']);
    
    Route::put('/venta/{id_venta}', [VentaController::class, 'update']);
    
    Route::delete('/venta/{id_venta}', [VentaController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});