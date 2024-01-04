import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenesService } from 'src/app/services/examenes.service';

@Component({
  selector: 'app-edit-examenes',
  templateUrl: './edit-examenes.component.html',
  styleUrls: ['./edit-examenes.component.css']
})
export class EditExamenesComponent {
  idexamen:any;
  examen:any;

  constructor (private route: ActivatedRoute, private router: Router,private examenesService:ExamenesService) { }

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  this.idexamen = Number (routeParams.get('idexamen'));
  console.log(this.idexamen);
  this.examenesService.find(this.idexamen).subscribe((data:any)=>{
    this.examen = data;
    console.log(this.examen);
    })
  }

  update(idexamen:string, nombre_examenes:string,descripcion_examen:string,precio_examen:string,servicios_idservicios:string){
    this.examenesService.update(this.idexamen,
    this.examen).subscribe((res)=>{
    this.router.navigateByUrl('/admin-examenes');
    })
    }
}

