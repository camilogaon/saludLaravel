import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {
  slider1 : any;

  constructor(private sanitizer: DomSanitizer){
    this.slider1 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/slider1.jpg');
  }

}
