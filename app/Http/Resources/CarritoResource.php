<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CarritoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_carrito' => $this->id_carrito,
            'nombre_servicio' => $this->nombre_servicio,
            'precio_servicio' => $this->precio_servicio,
            'id_servicio' => $this->id_servicio,
        ];
    }
}
