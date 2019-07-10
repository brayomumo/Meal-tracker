import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  meal: Meals[] = [
    // new Meals('Githeri', 100, 'Maize mixed with beans'),
    // new Meals('rice beef', 500, 'Rice mixed with beef')
  ];


  // tslint:disable-next-line: no-shadowed-variable
  addNewMeal(meal: Meals) {
    // tslint:disable-next-line: prefer-const
    this.meal.push(meal);
  }
  constructor() { }

  ngOnInit() {
  }

}
