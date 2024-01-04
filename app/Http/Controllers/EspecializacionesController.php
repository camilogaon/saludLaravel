<?php

namespace App\Http\Controllers;

use App\Models\Especializaciones;
use App\Models\servicios;
use Illuminate\Http\Request;

class EspecializacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Especializaciones::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Especializaciones::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $idespecializaciones)
    {
        return Especializaciones::find($idespecializaciones);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $idespecializaciones)
    {
        if(Especializaciones::where('idespecializaciones' , $idespecializaciones)->exists()){
            $especializaciones = Especializaciones::find($idespecializaciones);
            $especializaciones -> nombre_especializacion = $request->nombre_especializacion;
            $especializaciones -> descripcion_especializacion = $request->descripcion_especializacion;
            $especializaciones -> precio_especializacion = $request->precio_especializacion;
            $especializaciones -> servicios_idservicios = $request->servicios_idservicios;
            $especializaciones->save();
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
    public function destroy(string $idespecializaciones)
    {
        if(Especializaciones::where('idespecializaciones' , $idespecializaciones)->exists()){
            $especializaciones = Especializaciones::find($idespecializaciones);
            $especializaciones->delete();
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
