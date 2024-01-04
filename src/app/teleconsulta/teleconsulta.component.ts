import { Component } from '@angular/core';
import { ExamenesService } from '../services/examenes.service';
import { Router } from '@angular/router';
import { EspecializacionesService } from '../services/especializaciones.service';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-teleconsulta',
  templateUrl: './teleconsulta.component.html',
  styleUrls: ['./teleconsulta.component.css']
})
export class TeleconsultaComponent {
  constructor(private especializacionesService: EspecializacionesService, private router:Router, private carritoService:CarritoService) {}
    especializaciones: any;

    showAlert: boolean = false;

    carritos: any;

    ngOnInit():void{
      this.showEspecializaciones();
    }

    showEspecializaciones(){
      this.especializaciones = this.especializacionesService.listEspecializaciones().subscribe(especializacion=>{
        this.especializaciones = especializacion;
        console.log(this.especializaciones);

        });
    }

    pressbutton(nombre_especializacion:string,idespecializaciones:string,precio_especializacion:string): void {
      this.add(nombre_especializacion,idespecializaciones,precio_especializacion);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Ocultar la alerta después de 2 segundos
      }, 1000);
  }


  agregarAlCarrito(especializacion:any): void {
    this.carritos.push(especializacion);

  }

  add(nombre_especializacion:string,idespecializaciones:string,precio_especializacion:string){
    this.especializaciones={

     'nombre_servicio': nombre_especializacion,
     'id_servicio': idespecializaciones,
     'precio_servicio': precio_especializacion,

    };
    this.carritoService.addCarrito(this.especializaciones as any).subscribe(especializacion=>{
      this.especializaciones=especializacion
      this.router.navigateByUrl('/teleconsulta');

    });
  
  }

}
