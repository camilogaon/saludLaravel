import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-edit-medicamentos',
  templateUrl: './edit-medicamentos.component.html',
  styleUrls: ['./edit-medicamentos.component.css']
})
export class EditMedicamentosComponent {

  idmedicamentos:any;
  medicamento:any;
  constructor (private route: ActivatedRoute, private router: Router,private medicamentoService:MedicamentosService) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idmedicamentos = Number (routeParams.get('idmedicamentos'));
    console.log(this.idmedicamentos);
    this.medicamentoService.find(this.idmedicamentos).subscribe((data:any)=>{
      this.medicamento = data;
      console.log(this.medicamento);
      })
  }

  update(idmedicamentos:string, nombre_medicamento:string,descripcion_medicamento:string,precio_medicamento:string,servicios_idservicios:string){
    this.medicamentoService.update(this.idmedicamentos,
    this.medicamento).subscribe((res)=>{
    this.router.navigateByUrl('/admin-medicamentos');
    })
    }
    
}

