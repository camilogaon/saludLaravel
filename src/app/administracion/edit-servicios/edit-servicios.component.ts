import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-edit-servicios',
  templateUrl: './edit-servicios.component.html',
  styleUrls: ['./edit-servicios.component.css']
})
export class EditServiciosComponent {
  idservicios:any;
  servicio:any;

  constructor (private route: ActivatedRoute, private router: Router, private servicioService:ServiciosService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idservicios = Number (routeParams.get('idservicio'));
    console.log(this.idservicios);
    this.servicioService.find(this.idservicios).subscribe((data:any)=>{
      this.servicio = data;
      console.log(this.servicio);
    })
  }

  update(idservicio:string, nom_servicio:string,descripcion_servicio:string){
    this.servicioService.update(this.idservicios,this.servicio).subscribe((res)=>{
      this.router.navigateByUrl('/admin-servicios');
    })
  }
  

}
