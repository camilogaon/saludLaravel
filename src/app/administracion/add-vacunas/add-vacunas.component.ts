import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VacunasService } from 'src/app/services/vacunas.service';

@Component({
  selector: 'app-add-vacunas',
  templateUrl: './add-vacunas.component.html',
  styleUrls: ['./add-vacunas.component.css']
})
export class AddVacunasComponent {
  constructor(private vacunasService: VacunasService, private router:Router) { }
    vacunas :any;
    ngOnInit(): void {
    }

    add(idvacunas:string, nombre_vacuna:string, descripcion_vacuna:string,precio_vacuna:string,servicios_idservicios:string){
      this.vacunas={
        'idvacunas': idvacunas,
        'nombre_vacuna': nombre_vacuna,
        'descripcion_vacuna': descripcion_vacuna,
        'precio_vacuna':precio_vacuna,
        'servicios_idservicios':servicios_idservicios
      };
      this.vacunasService.addVacuna(this.vacunas as any).subscribe(vacuna=>{
        this.vacunas=vacuna
        });
        console.log(this.vacunas);
        this.router.navigateByUrl('/admin-vacunas');
    }
    
}
