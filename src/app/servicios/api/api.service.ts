import { Injectable } from '@angular/core';
import { LoginI} from '../../modelos/login.interface';
import { responseI} from '../../modelos/response.interface'
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError} from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://apiparaprincipiantes.test/api/clientes/'; // Ajusta la URL a tu API Laravel

  constructor(private http: HttpClient) {}

  crearUsuario(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }

 
}
