<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_venta';
    public $incrementing = true;
    public $timestamps = false;
    protected $fillable = [
         'id_venta','id_cliente', 'id_servicio','nombre_servicio','precio_servicio'
        ];
        protected $table = 'ventas';
}
