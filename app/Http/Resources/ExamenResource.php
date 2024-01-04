<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExamenResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'idexamen' => $this->idexamen,
            'nombre_examenes' => $this->nombre_examenes,
            'descripcion_examen' => $this->descripcion_examen,
            'precio_examenes' => $this->precio_examenes,
            'servicios_idservicios' => $this->servicios_idservicios,
        ];
            
    }
}
