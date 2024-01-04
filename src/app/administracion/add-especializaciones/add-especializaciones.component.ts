import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EspecializacionesService } from 'src/app/services/especializaciones.service';

@Component({
  selector: 'app-add-especializaciones',
  templateUrl: './add-especializaciones.component.html',
  styleUrls: ['./add-especializaciones.component.css']
})
export class AddEspecializacionesComponent {

  constructor(private especializacionesService: EspecializacionesService, private router:Router) { }

    especializaciones :any;

    ngOnInit(): void {
    }

    add(idespecializaciones:string, nombre_especializacion:string, descripcion_especializacion:string,precio_especializacion:string,servicios_idservicios:string){
      this.especializaciones={
        'idespecializaciones': idespecializaciones,
        'nombre_especializacion': nombre_especializacion,
        'descripcion_especializacion': descripcion_especializacion,
        'precio_especializacion':precio_especializacion,
        'servicios_idservicios':servicios_idservicios

      };
      this.especializacionesService.addEspecializacion(this.especializaciones as any).subscribe(especializacion=>{
        this.especializaciones=especializacion
      });

      console.log(this.especializaciones);

      this.router.navigateByUrl('/admin-especializaciones');
      

      
    }
}
