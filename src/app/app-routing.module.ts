import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopageComponent } from './components/nopage/nopage.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component:NopageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
