<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrito extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_carrito';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
        'id_carrito', 'nombre_servicio', 'precio_servicio', 'id_servicio'
    ];

    protected $table = 'carrito';
}
