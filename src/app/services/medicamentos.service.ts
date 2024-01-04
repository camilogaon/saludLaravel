import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient, private router:Router) { }

  listMedicamentos(){
    return this.http.get<any>(this.url+'/api/medicamentos');
  }


  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addMedicamento(medicamento:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/medicamentos',medicamento,this.httpOptions);
  }

  find(idmedicamentos:number): Observable<any> {
    return this.http.get(this.url+'/api/medicamento/'+idmedicamentos);
  }

  update(idmedicamentos:number,medicamento:any): Observable<any>{
    return this.http.put(this.url+'/api/medicamento/'+idmedicamentos,medicamento,this.httpOptions);
  }

  deleteMedicamento(idmedicamentos:any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/medicamentos/'+idmedicamentos,this.httpOptions);
    }
    
}
