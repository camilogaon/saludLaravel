<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MedicamentosResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'idmedicamentos' => $this->idmedicamentos,
            'nombre_medicamento' => $this->nombre_medicamento,
            'descripcion_medicamento' => $this->descripcion_medicamento,
            'precio_medicamento' => $this->precio_medicamento,
            'servicios_idservicios' => $this->servicios_idservicios,

        ];
    }
}
