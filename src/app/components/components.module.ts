import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopageComponent } from './nopage/nopage.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';




@NgModule({
  declarations: [
    NopageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule

  ]
})
export class ComponentsModule { }
