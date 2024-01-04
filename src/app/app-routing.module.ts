import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaServiciosComponent } from './pagina-servicios/pagina-servicios.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PaginaNosotrosComponent } from './pagina-nosotros/pagina-nosotros.component';
import { PaginaRegistrarseComponent} from './pagina-registrarse/pagina-registrarse.component';
import { PaginaExamenesComponent } from './pagina-examenes/pagina-examenes.component';
import { PaginaVacunasComponent } from './pagina-vacunas/pagina-vacunas.component';
import { PaginaPruebaComponent } from './pagina-prueba/pagina-prueba.component';
import { LoginComponent } from './login/login.component';
import { SeccionUserComponent } from './seccion-user/seccion-user.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { AdministradorComponent } from './administracion/administrador/administrador.component';
import { EspecializacionesComponent } from './administracion/especializaciones/especializaciones.component';
import { ExamenesComponent } from './administracion/examenes/examenes.component';
import { MedicamentosComponent } from './administracion/medicamentos/medicamentos.component';
import { VacunasComponent } from './administracion/vacunas/vacunas.component';
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



const routes: Routes = [

  {path: '',pathMatch:'full', redirectTo:'inicio'},
  {path: 'servicios', component:PaginaServiciosComponent},
  {path: 'nosotros' , component:PaginaNosotrosComponent},
  {path: 'inicio', component:PaginaInicioComponent},
  {path: 'registrarse' , component:PaginaRegistrarseComponent, canActivate: [BeforeLoginService]},
  {path: 'examenes' , component:PaginaExamenesComponent},
  {path: 'vacunas' , component:PaginaVacunasComponent},
  {path: 'prueba' , component:PaginaPruebaComponent},
  {path: 'login' , component:LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'user' , component:SeccionUserComponent,  canActivate: [AfterLoginService]},
  {path: 'admin-principal' , component:AdministradorComponent},
  {path: 'admin-especializaciones' , component:EspecializacionesComponent},
  {path: 'admin-examenes' , component:ExamenesComponent},
  {path: 'admin-medicamentos' , component:MedicamentosComponent},
  {path: 'admin-vacunas' , component:VacunasComponent},
  {path: 'admin-servicios' , component:ServiciosComponent},
  {path: 'add-admin-servicios' , component:AddServiciosComponent},
  {path: 'edit-servicios/:idservicios' , component:EditServiciosComponent},
  {path: 'add-admin-especializaciones' , component:AddEspecializacionesComponent},
  {path: 'edit-especializaciones/:idespecializaciones' , component:EditEspecializacionesComponent},
  {path: 'add-admin-medicamentos' , component:AddMedicamentosComponent},
  {path: 'edit-medicamentos/:idmedicamentos' , component:EditMedicamentosComponent},
  {path: 'add-admin-vacunas' , component:AddVacunasComponent},
  {path: 'edit-vacunas/:idvacunas' , component:EditVacunasComponent},
  {path: 'add-admin-examenes' , component:AddExamenesComponent},
  {path: 'edit-admin-examenes/:idexamen' , component:EditExamenesComponent},
  {path: 'teleconsulta' , component:TeleconsultaComponent},
  {path: 'medicamentos' , component:MedicamentosPageComponent},
  {path: 'carrito' , component:CarritoComponent},
  {path: 'exel' , component:ExelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
