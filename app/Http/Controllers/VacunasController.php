<?php

namespace App\Http\Controllers;

use App\Models\vacunas;
use Illuminate\Http\Request;

class VacunasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return vacunas::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return vacunas::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $idvacunas)
    {
        return vacunas::find($idvacunas);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $idvacunas){
    if(vacunas::where('idvacunas' , $idvacunas)->exists()){
        $vacunas = vacunas::find($idvacunas);
        $vacunas -> nombre_vacuna = $request->nombre_vacuna;
        $vacunas -> descripcion_vacuna = $request->descripcion_vacuna;
        $vacunas -> precio_vacuna = $request->precio_vacuna;
        $vacunas -> servicios_idservicios = $request->servicios_idservicios;
        $vacunas->save();
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
    public function destroy(string $idvacunas)
    {
        if(vacunas::where('idvacunas' , $idvacunas)->exists()){
            $vacunas = vacunas::find($idvacunas);
            $vacunas->delete();
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
