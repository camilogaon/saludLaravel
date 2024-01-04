
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'
import { JarwisService } from '../services/jarwis.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-registrarse',
  templateUrl: './pagina-registrarse.component.html',
  styleUrls: ['./pagina-registrarse.component.css']
})
export class PaginaRegistrarseComponent implements OnInit{

  public form = {
    name:null,
    email:null,
    password:null,
    password_confirmation:null

  };




  
  constructor(private Jarwis:JarwisService, private Token:TokenService, private router:Router) {}

  ngOnInit(): void{}
  public error:any = {};

  onSubmit(){
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );  
  }

  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/user');
  }

  handleError(error: any){
    this.error = error.error.errors;
  }

}
