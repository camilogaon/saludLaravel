import { Component } from '@angular/core';
import { ExamenesService } from '../services/examenes.service';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-pagina-examenes',
  templateUrl: './pagina-examenes.component.html',
  styleUrls: ['./pagina-examenes.component.css']
})
export class PaginaExamenesComponent {
  constructor(private examenesService: ExamenesService, private router:Router, private carritoService:CarritoService) {}
    examenes: any;

    showAlert: boolean = false;



    carritos: any;

    ngOnInit():void{
      this.showExamenes();
    }
    showExamenes(){
    this.examenes = this.examenesService.listExamenes().subscribe(examen=>{
    this.examenes = examen;
    console.log(this.examenes);
    });
    }

    pressbutton(nombre_examenes:string,idexamen:string,precio_examenes:string): void {
      this.add(nombre_examenes,idexamen,precio_examenes);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Ocultar la alerta después de 2 segundos
      }, 1000);
  }


  agregarAlCarrito(examen:any): void {
    this.carritos.push(examen);

  }

  add(nombre_examenes:string,idexamen:string,precio_examenes:string){
    this.examenes={

     'nombre_servicio': nombre_examenes,
     'id_servicio': idexamen,
     'precio_servicio': precio_examenes,

    };
    this.carritoService.addCarrito(this.examenes as any).subscribe(examen=>{
      this.examenes=examen
      this.router.navigateByUrl('/examenes');

    });
  
  }




}
