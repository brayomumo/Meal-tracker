import { Pipe, PipeTransform } from '@angular/core';
import { Meals } from './meals';

@Pipe({
  name: 'filter'
})
export class MealCaloriesPipe implements PipeTransform {
  transform(meal: Meals[], value: number) {
    if (!meal) {
      return meal;
    }
    return meal.filter(ft => ft.calories > 200);
  }
}
