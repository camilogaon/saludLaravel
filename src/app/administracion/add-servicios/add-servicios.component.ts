import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styleUrls: ['./add-servicios.component.css']
})
export class AddServiciosComponent {

  constructor(private router:Router, private serviciosService:ServiciosService){}
  
  servicios :any;

  ngOnInit(): void {
  }

  add(idservicios:string, nom_servicio:string, descripcion_servicio:string){
    this.servicios={
      'idservicios': idservicios,
      'nom_servicio': nom_servicio,
      'descripcion_servicio': descripcion_servicio
    };
    this.serviciosService.addServicio(this.servicios as any).subscribe(servicio=>{
      this.servicios=servicio
    });

    console.log(this.servicios);
    this.router.navigateByUrl('/admin-servicios');
  }

}
