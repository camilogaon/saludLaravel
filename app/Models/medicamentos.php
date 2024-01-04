<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class medicamentos extends Model
{
    use HasFactory;
    protected $primaryKey = 'idmedicamentos';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
        'idmedicamentos', 'nombre_medicamento', 'descripcion_medicamento', 'precio_medicamento', 'servicios_idservicios'
    ];

    protected $table = 'medicamentos';

    public function servicios()
    {
        return $this->belongsTo(servicios::class, 'servicios_idservicios', 'idservicios');
    }
}
