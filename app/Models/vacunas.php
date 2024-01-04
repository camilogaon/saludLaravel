<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vacunas extends Model
{
    use HasFactory;
    protected $primaryKey = 'idvacunas';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
    'idvacunas', 'nombre_vacuna', 'descripcion_vacuna', 'precio_vacuna', 'servicios_idservicios'
    ];
    protected $table = 'vacunas';

    public function servicios()
    {
        return $this->belongsTo(servicios::class, 'servicios_idservicios', 'idservicios');
    }
}
