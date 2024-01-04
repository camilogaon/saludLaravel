import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenesService } from 'src/app/services/examenes.service';

@Component({
  selector: 'app-add-examenes',
  templateUrl: './add-examenes.component.html',
  styleUrls: ['./add-examenes.component.css']
})
export class AddExamenesComponent {
    constructor(private examenesService: ExamenesService, private router:Router) { }
    examenes :any;


    ngOnInit(): void {
    }

    add(idexamen:string, nombre_examenes:string, descripcion_examen:string,precio_examenes:string,servicios_idservicios:string){
    this.examenes={
      'idexamen': idexamen,
      'nombre_examenes': nombre_examenes,
      'descripcion_examen': descripcion_examen,
      'precio_examenes':precio_examenes,
      'servicios_idservicios':servicios_idservicios
    };
    this.examenesService.addExamen(this.examenes as any).subscribe(examen=>{
      this.examenes=examen
    });
      console.log(this.examenes);
      this.router.navigateByUrl('/admin-examenes');
    }
    
}
