import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  constructor(private serviciosService:ServiciosService , private router:Router) {}
  servicios: any;


  ngOnInit():void{
    this.showServicios();
    }

    showServicios(){
      this.servicios = this.serviciosService.listServicios().subscribe(servicio=>{
      this.servicios = servicio;
      console.log(this.servicios);
      });
      }

      deleteServicio(idservicios:any){
        this.serviciosService.deleteServicio(idservicios).subscribe(
        res => {
        this.servicios = this.servicios.filter((a:any) => a.idservicios == idservicios);
        }
        );
        this.router.navigateByUrl('/admin-servicios');
        }
        
}
