import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VacunasComponent } from '../vacunas/vacunas.component';
import { VacunasService } from 'src/app/services/vacunas.service';

@Component({
  selector: 'app-edit-vacunas',
  templateUrl: './edit-vacunas.component.html',
  styleUrls: ['./edit-vacunas.component.css']
})
export class EditVacunasComponent {

  idvacunas:any;
  vacuna:any;

  constructor (private route: ActivatedRoute, private router: Router,private vacunasService:VacunasService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idvacunas = Number (routeParams.get('idvacunas'));
    console.log(this.idvacunas);
    this.vacunasService.find(this.idvacunas).subscribe((data:any)=>{
      this.vacuna = data;
      console.log(this.vacuna);
    })
      
  }


  update(idvacunas:string, nombre_vacuna:string,descripcion_vacuna:string,precio_vacuna:string,servicios_idservicios:string){
    this.vacunasService.update(this.idvacunas,this.vacuna).subscribe((res)=>{
    this.router.navigateByUrl('/admin-vacunas');
    })
    }
}


