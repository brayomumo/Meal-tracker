import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meals } from '../meals';

@Component({
  selector: 'app-meal-forms',
  templateUrl: './meal-forms.component.html',
  styleUrls: ['./meal-forms.component.css']
})
export class MealFormsComponent implements OnInit {
  newMeal = new Meals('', 0, '');

  @Output() addMeal = new EventEmitter<Meals>();

  submitMeal() {
    this.addMeal.emit(this.newMeal);
    alert('Appending done successfuly');
  }
  constructor() { }

  ngOnInit() {
  }

}
