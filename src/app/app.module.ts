import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaServiciosComponent } from './pagina-servicios/pagina-servicios.component';
import { PaginaNosotrosComponent } from './pagina-nosotros/pagina-nosotros.component';
import { PaginaRegistrarseComponent } from './pagina-registrarse/pagina-registrarse.component';
import { PaginaExamenesComponent } from './pagina-examenes/pagina-examenes.component';
import { PaginaVacunasComponent } from './pagina-vacunas/pagina-vacunas.component';
import { PaginaPruebaComponent } from './pagina-prueba/pagina-prueba.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { SeccionUserComponent } from './seccion-user/seccion-user.component';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { AdministradorComponent } from './administracion/administrador/administrador.component';
import { VacunasComponent } from './administracion/vacunas/vacunas.component';
import { ExamenesComponent } from './administracion/examenes/examenes.component';
import { MedicamentosComponent } from './administracion/medicamentos/medicamentos.component';
import { EspecializacionesComponent } from './administracion/especializaciones/especializaciones.component';
import { ServiciosComponent } from './administracion/servicios/servicios.component';
import { AddServiciosComponent } from './administracion/add-servicios/add-servicios.component';
import { EditServiciosComponent } from './administracion/edit-servicios/edit-servicios.component';
import { AddEspecializacionesComponent } from './administracion/add-especializaciones/add-especializaciones.component';
import { EditEspecializacionesComponent } from './administracion/edit-especializaciones/edit-especializaciones.component';
import { AddMedicamentosComponent } from './administracion/add-medicamentos/add-medicamentos.component';
import { EditMedicamentosComponent } from './administracion/edit-medicamentos/edit-medicamentos.component';
import { AddVacunasComponent } from './administracion/add-vacunas/add-vacunas.component';
import { EditVacunasComponent } from './administracion/edit-vacunas/edit-vacunas.component';
import { AddExamenesComponent } from './administracion/add-examenes/add-examenes.component';
import { EditExamenesComponent } from './administracion/edit-examenes/edit-examenes.component';
import { TeleconsultaComponent } from './teleconsulta/teleconsulta.component';
import { MedicamentosPageComponent } from './medicamentos-page/medicamentos-page.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ExelComponent } from './exel/exel.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaInicioComponent,
    FooterComponent,
    PaginaServiciosComponent,
    PaginaNosotrosComponent,
    PaginaRegistrarseComponent,
    PaginaExamenesComponent,
    PaginaVacunasComponent,
    PaginaPruebaComponent,
    LoginComponent,
    SeccionUserComponent,
    AdministradorComponent,
    VacunasComponent,
    ExamenesComponent,
    MedicamentosComponent,
    EspecializacionesComponent,
    ServiciosComponent,
    AddServiciosComponent,
    EditServiciosComponent,
    AddEspecializacionesComponent,
    EditEspecializacionesComponent,
    AddMedicamentosComponent,
    EditMedicamentosComponent,
    AddVacunasComponent,
    EditVacunasComponent,
    AddExamenesComponent,
    EditExamenesComponent,
    TeleconsultaComponent,
    MedicamentosPageComponent,
    CarritoComponent,
    ExelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [JarwisService,TokenService,AuthService,AfterLoginService,BeforeLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
