<?php

namespace App\Http\Controllers;

use App\Http\Resources\MedicamentosResource;
use App\Models\medicamentos;
use Illuminate\Http\Request;

class MedicamentosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return medicamentos::All();

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return medicamentos::create($request->all());

    }

    /**
     * Display the specified resource.
     */
    public function show(string $idmedicamentos)
    {
        return medicamentos::find($idmedicamentos);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $idmedicamentos)
    {
        if(medicamentos::where('idmedicamentos' , $idmedicamentos)->exists()){
            $medicamento = medicamentos::find($idmedicamentos);
            $medicamento -> idmedicamentos = $request->idmedicamentos;
            $medicamento -> nombre_medicamento = $request->nombre_medicamento;
            $medicamento -> descripcion_medicamento = $request->descripcion_medicamento;
            $medicamento -> precio_medicamento = $request->precio_medicamento;
            $medicamento -> servicios_idservicios = $request->servicios_idservicios;
            $medicamento->save();
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
    public function destroy(string $idmedicamentos)
    {
        if(medicamentos::where('idmedicamentos' , $idmedicamentos)->exists()){
            $medicamentos = medicamentos::find($idmedicamentos);
            $medicamentos->delete();
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
