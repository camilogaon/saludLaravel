import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  url:string = 'http://localhost:8000';

  constructor(private http:HttpClient,private router:Router) { }

  listServicios(){
    return this.http.get<any>(this.url+'/api/servicios');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }


    addServicio(servicio:any):Observable<any>{
      return this.http.post<any>(this.url+'/api/servicios',servicio,this.httpOptions);
    }

    find(idservicios:number): Observable<any> {
      return this.http.get(this.url+'/api/servicio/'+idservicios);
    }

    update(idservicios:number,servicio:any): Observable<any>{
      return this.http.put(this.url+'/api/servicio/'+idservicios,servicio,this.httpOptions);
    }
    
    deleteServicio(idservicio:any): Observable<any>{
      return this.http.delete<any>(this.url+'/api/servicio/'+idservicio,this.httpOptions);
      }
      
}
