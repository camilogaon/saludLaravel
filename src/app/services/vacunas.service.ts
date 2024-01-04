import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient, private router:Router) { }

  listVacunas(){
  return this.http.get<any>(this.url+'/api/vacunas');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addVacuna(vacuna:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/vacunas',
    vacuna,this.httpOptions);
  }

  find(idvacunas:number): Observable<any> {
    return this.http.get(this.url+'/api/vacuna/'+idvacunas);
  }

  update(idvacuna:number,vacuna:any): Observable<any>{
    return this.http.put(this.url+'/api/vacuna/'+idvacuna,vacuna,this.httpOptions);
  }
    
  deleteVacuna(idvacuna:any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/vacuna/'+idvacuna,this.httpOptions);
    }

}
