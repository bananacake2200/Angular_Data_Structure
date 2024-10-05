import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmenulistComponent } from './foodmenulist.component';

describe('FoodmenulistComponent', () => {
  let component: FoodmenulistComponent;
  let fixture: ComponentFixture<FoodmenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodmenulistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodmenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
