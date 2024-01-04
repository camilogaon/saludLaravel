import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form = {
    email: null,
    password: null
  }

  constructor(private http:HttpClient, private router: Router) {}

  onSubmit(){
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => console.log(error),
      
      
    );
   

  }
}
