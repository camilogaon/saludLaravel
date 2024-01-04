<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Especializaciones extends Model
{
    use HasFactory;
    protected $primaryKey = 'idespecializaciones';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
        'idespecializaciones', 'nombre_especializacion', 'descripcion_especializacion', 'precio_especializacion', 'servicios_idservicios'
    ];

    protected $table = 'especializaciones';

    public function servicios()
    {
        return $this->belongsTo(servicios::class, 'servicios_idservicios', 'idservicios');
    }
}
