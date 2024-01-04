import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient, private router:Router) { }

  listCarrito(){
    return this.http.get<any>(this.url+'/api/carritos');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
    
  addCarrito(carrito:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/carritos',carrito,this.httpOptions);
 }

 deleteServicio(id_carrito:any): Observable<any>{
  return this.http.delete<any>(this.url+'/api/carrito/'+id_carrito,this.httpOptions);
}
}
