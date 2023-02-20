import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home/home.component';
import { AboutComponent } from '../components/home/home/about/about.component';

const childRoutes: Routes = [

  { path: '', component: HomeComponent, data: { titulo: 'Inicio' } },
  { path: 'nosotros', component: AboutComponent, data: { titulo: 'Nosotros' } },
 
  // { path: 'programas', component: ProgramasComponent, data: { titulo: 'Programas' } },
  // { path: 'financiacion', component: FinanciacionComponent, data: { titulo: 'Financiación' } },
  // { path: 'admisiones', component: AdmisionesComponent, data: { titulo: 'Admisiones' } },
  // { path: 'contact', component: ContactComponent, data: { titulo: 'Contact' } },
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
