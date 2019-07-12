import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meals } from '../meals';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  public show: boolean = false;
  public show1: boolean = false;

  public buttonName: any = "Show";
  title = "meal-tracker";
  arr: [];

  meal: Meals[];

  constructor() {
    this.meal = [
      new Meals("chipo", 500, "i only had a handful"),
      new Meals("smokies", 500, "i only had 2"),
      new Meals("pizza", 200, "i only had 2 slices")
    ];
  }

  addMeal(
    name: HTMLInputElement,
    calories: HTMLInputElement,
    details: HTMLInputElement
  ): boolean {
    console.log(
      `Adding food name: ${name.value}, calories: ${
      calories.value
      } and details: ${calories.value}`
    );
    this.meal.push(
      new Meals(name.value, parseInt(calories.value), details.value)
    );
    name.value = "";
    calories.value = "";
    details.value = "";
    return false;
  }

  filter() {
    return this.meal.filter(x => x.calories > 200);
  }

  filterLess() {
    return this.meal.filter(x => x.calories <= 200);
  }

  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }

  toggle1() {
    this.show1 = !this.show1;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show1) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.meal.splice(index, 1);
    }
  }

  edit(isedit, index) {
    if (isedit) {
      console.log(
        this.meal[index].name,
        this.meal[index].calories,
        this.meal[index].details
      );
    }
    var meals = this.meal.map(meal => {
      var oneMeal = meal;
      return oneMeal;
    });
    console.log(meals[index]);
  }
  ngOnInit() {
  }

}
