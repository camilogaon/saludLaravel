import { Component } from '@angular/core';
import { MedicamentosService } from '../services/medicamentos.service';
import { Router } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-medicamentos-page',
  templateUrl: './medicamentos-page.component.html',
  styleUrls: ['./medicamentos-page.component.css']
})
export class MedicamentosPageComponent {
  constructor(private medicamentosService: MedicamentosService, private router:Router, private carritoService:CarritoService) {}


  showAlert: boolean = false;

  medicamentos: any;

  carritos: any;

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

  pressbutton(nombre_medicamento:string,idmedicamentos:string,precio_medicamento:string): void {
      this.add(nombre_medicamento,idmedicamentos,precio_medicamento);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Ocultar la alerta después de 2 segundos
      }, 1000);
  }


  agregarAlCarrito(medicamento:any): void {
    this.carritos.push(medicamento);

  }

  add(nombre_medicamento:string,idmedicamentos:string,precio_medicamento:string){
    this.medicamentos={

     'nombre_servicio': nombre_medicamento,
     'id_servicio': idmedicamentos,
     'precio_servicio': precio_medicamento,

    };
    this.carritoService.addCarrito(this.medicamentos as any).subscribe(medicamento=>{
      this.medicamentos=medicamento
      this.router.navigateByUrl('/medicamentos');

    });
  
  }
}
