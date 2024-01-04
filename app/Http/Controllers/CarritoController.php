<?php

namespace App\Http\Controllers;

use App\Models\Carrito;
use Illuminate\Http\Request;

class CarritoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Carrito::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Carrito::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id_carrito)
    {
        return Carrito::find($id_carrito);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id_carrito)
    {
        if(Carrito::where('id_carrito' , $id_carrito)->exists()){
            $carrito = Carrito::find($id_carrito);
            $carrito -> nombre_servicio = $request->nombre_servicio;
            $carrito -> precio_servicio = $request->precio_servicio;
            $carrito -> id_servicio = $request->id_servicio;
            $carrito->save();
            return response()->json([
                "message" => "record updated successfully"
            ], 200);
        }else{
            return response()->json([
                "message" => "Article not found"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id_carrito)
    {
        if(Carrito::where('id_carrito' , $id_carrito)->exists()){
            $carrito = Carrito::find($id_carrito);
            $carrito->delete();
            return response()->json([
                "message" => "record deleted"
            ], 202);
        }else{
            return response()->json([
                "message" => 'Article not found'
            ], 404);
        }
    }
}
