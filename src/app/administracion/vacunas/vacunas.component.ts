import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VacunasService } from 'src/app/services/vacunas.service';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css']
})
export class VacunasComponent {


  constructor(private vacunasService: VacunasService, private router:Router) {}
    vacunas: any;

    ngOnInit():void{
    this.showVacunas();
    }
    showVacunas(){
    this.vacunas = this.vacunasService.listVacunas().subscribe(vacuna=>{
    this.vacunas = vacuna;
    console.log(this.vacunas);
    });
    }
    

    deleteVacuna(idvacunas:any){
      this.vacunasService.deleteVacuna(idvacunas).subscribe(
      res => {
      this.vacunas = this.vacunas.filter((a:any) => a.idvacunas == idvacunas);
      }
      );
      this.router.navigateByUrl('/admin-vacunas');
      }
      
}
