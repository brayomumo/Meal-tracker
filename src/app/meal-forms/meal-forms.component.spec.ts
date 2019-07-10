import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealFormsComponent } from './meal-forms.component';

describe('MealFormsComponent', () => {
  let component: MealFormsComponent;
  let fixture: ComponentFixture<MealFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
