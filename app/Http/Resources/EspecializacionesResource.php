<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EspecializacionesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'idespecializaciones' => $this->idespecializaciones,
            'nombre_especializacion' => $this->nombre_especializacion,
            'descripcion_especializacion' => $this->descripcion_especializacion,
            'precio_especializacion' => $this->precio_especializacion,
            'servicios_idservicios' => $this->servicios_idservicios,
            ];
            
    }
}
