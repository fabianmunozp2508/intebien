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
    HomeComponent
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
