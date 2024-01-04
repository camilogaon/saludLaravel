<?php

namespace App\Http\Controllers;

use App\Models\Venta;
use Illuminate\Http\Request;

class VentaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Venta::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Venta::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id_venta)
    {
        return Venta::find($id_venta);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
