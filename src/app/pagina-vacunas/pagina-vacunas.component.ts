import { Component } from '@angular/core';
import { VacunasService } from '../services/vacunas.service';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-pagina-vacunas',
  templateUrl: './pagina-vacunas.component.html',
  styleUrls: ['./pagina-vacunas.component.css']
})
export class PaginaVacunasComponent {

  constructor(private vacunasService: VacunasService, private router:Router, private carritoService:CarritoService) {}
    vacunas: any;

    showAlert: boolean = false;

    carritos: any;

    ngOnInit():void{
    this.showVacunas();
    }
    showVacunas(){
    this.vacunas = this.vacunasService.listVacunas().subscribe(vacuna=>{
    this.vacunas = vacuna;
    console.log(this.vacunas);
    });
    }


    pressbutton(nombre_vacuna:string,idvacunas:string,precio_vacuna:string): void {
      this.add(nombre_vacuna,idvacunas,precio_vacuna);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Ocultar la alerta después de 2 segundos
      }, 1000);
  }


  agregarAlCarrito(vacuna:any): void {
    this.carritos.push(vacuna);

  }

  add(nombre_vacuna:string,idvacunas:string,precio_vacuna:string){
    this.vacunas={

     'nombre_servicio': nombre_vacuna,
     'id_servicio': idvacunas,
     'precio_servicio': precio_vacuna,

    };
    this.carritoService.addCarrito(this.vacunas as any).subscribe(vacuna=>{
      this.vacunas=vacuna
      this.router.navigateByUrl('/vacunas');

    });
  
  }
}
