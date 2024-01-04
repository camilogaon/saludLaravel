<?php

namespace App\Http\Controllers;

use App\Models\Examen;
use Illuminate\Http\Request;

class ExamenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Examen::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Examen::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $idexamen)
    {
        return Examen::find($idexamen);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $idexamen)
    {
        if(Examen::where('idexamen' , $idexamen)->exists()){
            $examen = Examen::find($idexamen);
            $examen -> nombre_examenes = $request->nombre_examenes;
            $examen -> descripcion_examen = $request->descripcion_examen;
            $examen -> precio_examenes = $request->precio_examenes;
            $examen -> servicios_idservicios = $request->servicios_idservicios;
            $examen->save();
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
    public function destroy(string $idexamen)
    {
        if(Examen::where('idexamen' , $idexamen)->exists()){
            $examen = Examen::find($idexamen);
            $examen->delete();
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
