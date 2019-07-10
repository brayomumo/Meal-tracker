import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealFormsComponent } from './meal-forms/meal-forms.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
@NgModule({
  declarations: [
    AppComponent,
    MealFormsComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
