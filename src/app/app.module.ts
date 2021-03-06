import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealFormsComponent } from './meal-forms/meal-forms.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealCaloriesPipe } from './meal-calories.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MealFormsComponent,
    MealDetailsComponent,
    MealCaloriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
