import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenesService } from 'src/app/services/examenes.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent {

  constructor(private examenesService: ExamenesService, private router:Router) {}
    examenes: any;
    ngOnInit():void{
      this.showExamenes();
    }
    showExamenes(){
    this.examenes = this.examenesService.listExamenes().subscribe(examen=>{
    this.examenes = examen;
    console.log(this.examenes);
    });
    }

    deleteExamen(idexamen:any){
      this.examenesService.deleteExamen(idexamen).subscribe(res => {
      this.examenes = this.examenes.filter((a:any) => a.idexamen == idexamen);
      }
      );
      this.router.navigateByUrl('/admin-examenes');
      }
    
}
