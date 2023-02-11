import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegFoodComponent } from './nonveg-food.component';

describe('NonvegFoodComponent', () => {
  let component: NonvegFoodComponent;
  let fixture: ComponentFixture<NonvegFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvegFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
