import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecializacionesService } from 'src/app/services/especializaciones.service';

@Component({
  selector: 'app-edit-especializaciones',
  templateUrl: './edit-especializaciones.component.html',
  styleUrls: ['./edit-especializaciones.component.css']
})
export class EditEspecializacionesComponent {

  idespecializaciones:any;
  especializacion:any;
  
    constructor (private route: ActivatedRoute, private router: Router, private especializacionesService:EspecializacionesService) { }
    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      this.idespecializaciones = Number (routeParams.get('idespecializaciones'));
      console.log(this.idespecializaciones);
      this.especializacionesService.find(this.idespecializaciones).subscribe((data:any)=>{
        this.especializacion = data;
        console.log(this.especializacion);
      })
    }

    update(idespecializaciones:string, nombre_especializacion:string,descripcion_especializacion:string,precio_especializacion:string,servicios_idservicios:string){
      this.especializacionesService.update(this.idespecializaciones,
      this.especializacion).subscribe((res)=>{
        this.router.navigateByUrl('/admin-especializaciones');
      })
    }
  }


