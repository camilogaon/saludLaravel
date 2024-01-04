<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class servicios extends Model
{
    
    protected $primaryKey = 'idservicios';
    public $incrementing = false;
    public $timestamps = false;
    use HasFactory;
    protected $fillable = [
        'idservicios', 'nom_servicio', 'descripcion_servicio'
    ];

    protected $table = 'servicios';

    public function medicamentos()
    {
        return $this->belongsTo(servicios::class, 'servicios_idservicios', 'idservicios');
    }
}
