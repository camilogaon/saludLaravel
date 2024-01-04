<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VacunasResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'idvacunas' => $this->idvacunas,
            'nombre_vacuna' => $this->nombre_vacuna,
            'descripcion_vacuna' => $this->descripcion_vacuna,
            'precio_vacuna' => $this->precio_vacuna,
            'servicios_idservicios' => $this->servicios_idservicios,
            ];
            
    }
}
