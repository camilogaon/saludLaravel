import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { JarwisService } from '../services/jarwis.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public loggedIn: boolean;

  public form = {
    email: null,
    password: null
  }


  public error = null;
  constructor(private Jarwis:JarwisService, private Token: TokenService, private router: Router, private Auth:AuthService) {this.loggedIn = false;}

  onSubmit(){
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      
    );
  }


  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/inicio');
  }


  handleError(error){
    this.error = error.error.error;
  }


  ngOnInit(){
    this.Auth.authStatus.subscribe(value=>this.loggedIn=value);
  }

  logout(event : MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/inicio');
  }
}


