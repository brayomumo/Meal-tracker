import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  meal: Meals [] = [
    new Meals('Githeri', 50, 'Maize mixed with beans'),
    new Meals( 'rice beef', 100, 'Rice mixed with beef')
  ];
  constructor() { }

  ngOnInit() {
  }

}
