import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home/home.component';
import { AboutComponent } from '../components/home/home/about/about.component';
import { AddressComponent } from '../components/home/home/address/address.component';
import { CoursesComponent } from '../components/home/home/courses/courses.component';
import { ReviewComponent } from '../components/home/home/review/review.component';
import { FeatureComponent } from '../components/home/home/feature/feature.component';
import { InfanciaComponent } from '../components/home/home/infancia/infancia.component';
import { SeguridadSaludComponent } from '../components/home/home/seguridad-salud/seguridad-salud.component';
import { SeguridadCocinaComponent } from '../components/home/home/cocina/seguridad-cocina.component';
import { AudiovisualComponent } from '../components/home/home/audiovisual/audiovisual.component';
import { ContableFinancieroComponent} from '../components/home/home/contable-financiero/contable-financiero.component';
import { FarmaceuticosComponent } from '../components/home/home/farmaceuticos/farmaceuticos.component';
import { MecanicaDieselComponent } from '../components/home/home/mecanica-diesel/mecanica-diesel.component';
import { SeguridadMecanicaMotosComponent } from '../components/home/home/mecanica-motos/seguridad-mecanica-motos.component';
import { MercadeoComponent } from '../components/home/home/mercadeo/mercadeo.component';
import { SecretariadoComponent } from '../components/home/home/secretariado/secretariado.component';
import { ConfeccionComponent } from '../components/home/home/confeccion/confeccion.component';
import { DesarrolloComponent } from '../components/home/home/desarrollo/desarrollo.component';
import { MaquinariaComponent } from '../components/home/home/maquinaria/maquinaria.component';
import { MarketingComponent } from '../components/home/home/marketing/marketing.component';
import { ReparacioncompuComponent } from '../components/home/home/reparacioncompu/reparacioncompu.component';
import { BajatensionComponent } from '../components/home/home/bajatension/bajatension.component';
import { TopografiaComponent } from '../components/home/home/topografia/topografia.component';
const childRoutes: Routes = [

  { path: '', component: HomeComponent, data: { titulo: 'Inicio' } },
  { path: 'nosotros', component: FeatureComponent, data: { titulo: 'Nosotros' } },

  { path: 'programas', component: CoursesComponent, data: { titulo: 'Programas' } },
  // { path: 'financiacion', component: FinanciacionComponent, data: { titulo: 'Financiación' } },
  { path: 'admisiones', component: ReviewComponent, data: { titulo: 'Admisiones' } },
  { path: 'contact', component: AddressComponent, data: { titulo: 'Contact' } },
  { path: 'infancia', component: InfanciaComponent, data: { titulo: 'Atención a la primera infancia' } },
  { path: 'seguridaocupacional', component: SeguridadSaludComponent, data: { titulo: 'Segurida Ocuapacional' } },
  { path: 'cocina', component: SeguridadCocinaComponent, data: { titulo: 'Cocina' } },
  { path: 'audiovisual', component: AudiovisualComponent, data: { titulo: 'Audiovicual' } },
  { path: 'contable', component:ContableFinancieroComponent, data: { titulo: 'Auxiliar contable y financiero' } },
  { path: 'farmaceutico', component:FarmaceuticosComponent, data: { titulo: 'Auxiliar en servicios farmacéuticos ' } },
  { path: 'mecanicadisel', component:MecanicaDieselComponent, data: { titulo: 'Mecánica Diesel' } },
  { path: 'mecanicamotos', component:SeguridadMecanicaMotosComponent, data: { titulo: 'Mecánica de motos' } },
  { path: 'mercadeo', component:MercadeoComponent, data: { titulo: '•	Técnico laboral en mercadeo y ventas' } },
  { path: 'secretariado', component:SecretariadoComponent, data: { titulo: 'Secretariado ejecutivo' } },
  { path: 'confeccion', component:ConfeccionComponent, data: { titulo: 'Confección y alta costura' } },
  { path: 'desarollo', component: DesarrolloComponent, data: { titulo: 'Programación y desarrollo de software' } },
  { path: 'maquinaria', component:MaquinariaComponent, data: { titulo: 'Manejo de maquinaria pesada' } },
  { path: 'marketing', component:MarketingComponent, data: { titulo: 'Marketing laboral' } },
  { path: 'reparacioncompu', component:ReparacioncompuComponent, data: { titulo: 'Mantenimiento y reparación de computadores' } },
  { path: 'bajatension', component:BajatensionComponent, data: { titulo: 'instalación y reparación de redes en baja tensión' } },
  { path: 'topografia', component:TopografiaComponent, data: { titulo: 'Auxiliar de topografía' } },
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
