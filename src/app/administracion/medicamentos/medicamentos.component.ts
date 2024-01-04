import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent {

  constructor(private medicamentosService: MedicamentosService, private router:Router) {}

    medicamentos: any;
    ngOnInit():void{
      this.showMedicamentos();
    }
    showMedicamentos(){
      this.medicamentos =
      this.medicamentosService.listMedicamentos().subscribe(medicamento=>{
        this.medicamentos = medicamento;
        console.log(this.medicamentos);
      });
    }

    deleteMedicamento(idmedicamentos:any){
      this.medicamentosService.deleteMedicamento(idmedicamentos).subscribe(res => {
        this.medicamentos = this.medicamentos.filter((a:any) => a.idmedicamentos == idmedicamentos);
      });
      this.router.navigateByUrl('/edit-medicamentos');
      }
}
