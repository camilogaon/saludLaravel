import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecializacionesService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient, private router:Router) { }

  listEspecializaciones(){
    return this.http.get<any>(this.url+'/api/especializaciones');
    }

    httpOptions ={
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }

    addEspecializacion(especializacion:any):Observable<any>{
      return this.http.post<any>(this.url+'/api/especializaciones',especializacion,this.httpOptions);
    }

    find(idespecializaciones:number): Observable<any> {
      return this.http.get(this.url+'/api/especializacion/'+idespecializaciones);
    }

    update(idespecializaciones:number,especializacion:any): Observable<any>{
      return this.http.put(this.url+'/api/especializacion/'+idespecializaciones,especializacion,this.httpOptions);
    }

    deleteEspecializacion(idespecializaciones:any): Observable<any>{
      return this.http.delete<any>(this.url+'/api/especializacion/'+idespecializaciones,this.httpOptions);
    }
}
