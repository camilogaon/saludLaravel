<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VentaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_venta' => $this->id_venta,
            'id_cliente' => $this->id_cliente,
            'id_servicio' => $this->id_servicio,
            'nombre_servicio' => $this->nombre_servicio,
            'precio_servicio' => $this->precio_servicio,
        ];
    }
}
