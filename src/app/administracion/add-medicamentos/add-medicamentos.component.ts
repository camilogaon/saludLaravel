import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-add-medicamentos',
  templateUrl: './add-medicamentos.component.html',
  styleUrls: ['./add-medicamentos.component.css']
})
export class AddMedicamentosComponent {

  constructor(private medicamentosService: MedicamentosService, private router:Router) { }
    medicamentos :any;

    ngOnInit(): void {
    }

    add(idmedicamentos:string, nombre_medicamento:string, descripcion_medicamento:string,precio_medicamento:string,servicios_idservicios:string){
    this.medicamentos={
    'idmedicamentos': idmedicamentos,
    'nombre_medicamento': nombre_medicamento,
    'descripcion_medicamento': descripcion_medicamento,
    'precio_medicamento':precio_medicamento,
    'servicios_idservicios':servicios_idservicios
    };
    this.medicamentosService.addMedicamento(this.medicamentos as any).subscribe(medicamento=>{
      this.medicamentos=medicamento
    });
      console.log(this.medicamentos);
      this.router.navigateByUrl('/admin-medicamentos');
    }
    
}
