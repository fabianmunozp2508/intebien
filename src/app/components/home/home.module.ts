import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './home/feature/feature.component';
import { AboutComponent } from './home/about/about.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { StartComponent } from './home/start/start.component';
import { CoursesComponent } from './home/courses/courses.component';
import { AddressComponent } from './home/address/address.component';
import { TeanComponent } from './home/tean/tean.component';
import { ReviewComponent } from './home/review/review.component';
import { CounterComponent } from './home/counter/counter.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { InfanciaComponent } from './home/infancia/infancia.component';
import { ContableFinancieroComponent } from './home/contable-financiero/contable-financiero.component';
import { FarmaceuticosComponent } from './home/farmaceuticos/farmaceuticos.component';
import { MercadeoComponent } from './home/mercadeo/mercadeo.component';
import { AudiovisualComponent } from './home/audiovisual/audiovisual.component';
import { SecretariadoComponent } from './home/secretariado/secretariado.component';
import { SeguridadSaludComponent } from './home/seguridad-salud/seguridad-salud.component';
import { SeguridadCocinaComponent } from './home/cocina/seguridad-cocina.component';
import { SeguridadMecanicaMotosComponent } from './home/mecanica-motos/seguridad-mecanica-motos.component';
import { MecanicaDieselComponent } from './home/mecanica-diesel/mecanica-diesel.component';
import { ReparacioncompuComponent } from './home/reparacioncompu/reparacioncompu.component';
import { MarketingComponent } from './home/marketing/marketing.component';
import { ConfeccionComponent } from './home/confeccion/confeccion.component';
import { BajatensionComponent } from './home/bajatension/bajatension.component';
import { MaquinariaComponent } from './home/maquinaria/maquinaria.component';
import { DesarrolloComponent } from './home/desarrollo/desarrollo.component';
import { TopografiaComponent } from './home/topografia/topografia.component';



@NgModule({
  declarations: [
    FeatureComponent,
    AboutComponent,
    CategoriesComponent,
    StartComponent,
    CoursesComponent,
    AddressComponent,
    TeanComponent,
    ReviewComponent,
    CounterComponent,
    HomeComponent,
    InfanciaComponent,
    ContableFinancieroComponent,
    FarmaceuticosComponent,
    MercadeoComponent,
    AudiovisualComponent,
    SecretariadoComponent,
    SeguridadSaludComponent,
    SeguridadCocinaComponent,
    SeguridadMecanicaMotosComponent,
    MecanicaDieselComponent,
    ReparacioncompuComponent,
    MarketingComponent,
    ConfeccionComponent,
    BajatensionComponent,
    MaquinariaComponent,
    DesarrolloComponent,
    TopografiaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [
    FeatureComponent,
    AboutComponent,
    CategoriesComponent,
    StartComponent,
    CoursesComponent,
    AddressComponent,
    TeanComponent,
    ReviewComponent,
    CounterComponent
   ]
})
export class HomeModule { }
