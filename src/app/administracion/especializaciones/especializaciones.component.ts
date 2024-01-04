import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EspecializacionesService } from 'src/app/services/especializaciones.service';

@Component({
  selector: 'app-especializaciones',
  templateUrl: './especializaciones.component.html',
  styleUrls: ['./especializaciones.component.css']
})
export class EspecializacionesComponent {

  constructor(private especializacionesService: EspecializacionesService, private router:Router) {}
    especializaciones: any;

    ngOnInit():void{
      this.showEspecializaciones();
    }

    showEspecializaciones(){
      this.especializaciones = this.especializacionesService.listEspecializaciones().subscribe(especializacion=>{
        this.especializaciones = especializacion;
        console.log(this.especializaciones);

        });
    }

    deleteEspecializacion(idespecializaciones:any){
      this.especializacionesService.deleteEspecializacion(idespecializaciones).subscribe(res => {
        this.especializaciones = this.especializaciones.filter((a:any) => a.idespecializaciones == idespecializaciones);
      }
      );
      this.router.navigateByUrl('/admin-especializaciones');
    }
      
    
}
