import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Meals } from '../meals';

@Component({
  selector: 'app-meal-forms',
  templateUrl: './meal-forms.component.html',
  styleUrls: ['./meal-forms.component.css']
})
export class MealFormsComponent implements OnInit {
  @Input() foodTracker: Meals;
  ft: Meals[];
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isedit = new EventEmitter<Meals>();

  name: string;
  calories: number;
  details: string;
  arr: [];
  getMeal = new Meals(this.name, this.calories, this.details);

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  edit(name: string, calories: number, details: string) {
    this.isedit.emit(this.getMeal);
  }

  // edit(name, calories, details) {
  //   // var edit = this.ft.map(meal => {
  //   //   meal.name;
  //   // });

  //   console.log(
  //     this.foodTracker.name,
  //     this.foodTracker.calories,
  //     this.foodTracker.details
  //   );
  // }
  constructor() {
    // this.foodTracker = new FoodTracker("chipo", 500, "i only had a handful");
  }

  ngOnInit() {}
}
