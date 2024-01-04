import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient, private router:Router) { }

  listExamenes(){
    return this.http.get<any>(this.url+'/api/examenes');
  }


  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addExamen(examen:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/examenes',examen,this.httpOptions);
  }
    
  find(idexamen:number): Observable<any> {
    return this.http.get(this.url+'/api/article/'+idexamen);
  }

  update(idexamen:number,examen:any): Observable<any>{
    return this.http.put(this.url+'/api/examen/'+idexamen,examen,this.httpOptions);
  }

  deleteExamen(idexamen:any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/examen/'+idexamen,this.httpOptions);
    }
    
}
