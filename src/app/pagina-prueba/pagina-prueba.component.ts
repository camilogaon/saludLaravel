import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ApiService } from '../servicios/api/api.service';

@Component({
  selector: 'app-pagina-prueba',
  templateUrl: './pagina-prueba.component.html',
  styleUrls: ['./pagina-prueba.component.css']
})


export class PaginaPruebaComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.apiService.crearUsuario(formData).subscribe(
        (response) => {
          console.log('Usuario creado correctamente', response);
          // Aquí puedes mostrar algún mensaje de éxito o redireccionar a otra página
        },
        (error) => {
          console.error('Error al crear el usuario', error);
          // Aquí puedes mostrar un mensaje de error o manejar el error de otra manera
        }
      );
    }
  }

  // nombres: string = '';
  // apellidos: string = '';

  // constructor(private http: HttpClient) { }

  // guardarUsuario() {
  //   const usuario = {
  //     nombre: this.nombres,
  //     apellidos: this.apellidos,
  //   };

  //   this.http.post('http://apiparaprincipiantes.test/api/clientes', usuario).subscribe(
  //     (response) => {
  //       console.log('Usuario creado correctamente', response);
  //     },
  //     (error) => {
  //       console.error('Error al crear el usuario', error);
  //     }
  //   );
  // }
}
