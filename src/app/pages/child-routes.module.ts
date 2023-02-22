import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home/home.component';
import { AboutComponent } from '../components/home/home/about/about.component';
import { AddressComponent } from '../components/home/home/address/address.component';
import { CoursesComponent } from '../components/home/home/courses/courses.component';
import { ReviewComponent } from '../components/home/home/review/review.component';
import { FeatureComponent } from '../components/home/home/feature/feature.component';

const childRoutes: Routes = [

  { path: '', component: HomeComponent, data: { titulo: 'Inicio' } },
  { path: 'nosotros', component: FeatureComponent, data: { titulo: 'Nosotros' } },

  { path: 'programas', component: CoursesComponent, data: { titulo: 'Programas' } },
  // { path: 'financiacion', component: FinanciacionComponent, data: { titulo: 'Financiación' } },
  { path: 'admisiones', component: ReviewComponent, data: { titulo: 'Admisiones' } },
  { path: 'contact', component: AddressComponent, data: { titulo: 'Contact' } },
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
