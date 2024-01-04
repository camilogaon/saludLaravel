<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Examen extends Model
{
    use HasFactory;
    protected $primaryKey = 'idexamen';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
        'idexamen', 'nombre_examenes', 'descripcion_examen','precio_examenes','servicios_idservicios'
    ];
    protected $table = 'examenes';
}
