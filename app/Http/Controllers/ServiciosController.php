<?php

namespace App\Http\Controllers;

use App\Models\servicios;
use Illuminate\Http\Request;

class ServiciosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return servicios::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return servicios::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $idservicios)
    {
        return servicios::find($idservicios);
    }

    /**
     * Update the specified resource in storage.
     */
   
     public function update(Request $request, string $idservicios)
    {

        if(servicios::where('idservicios' , $idservicios)->exists()){
            $servicio = servicios::find($idservicios);
            $servicio -> nom_servicio = $request->nom_servicio;
            $servicio -> descripcion_servicio = $request->descripcion_servicio;
            $servicio->save();
            return response()->json([
                "message" => "record updated successfully"
            ], 200);
        }else{
            return response()->json([
                "message" => "Categoria not found"
            ],404);
        }
    }
        

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $idservicio)
    {
        if(servicios::where('idservicios' , $idservicio)->exists()){
            $servicio = servicios::find($idservicio);
            $servicio->delete();
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
