<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiciosResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'idservicios' => $this->idservicios,
            'nom_servicio' => $this->nom_servicio,
            'descripcion_servicio' => $this->descripcion_servicio,
            ];
            
    }
}
