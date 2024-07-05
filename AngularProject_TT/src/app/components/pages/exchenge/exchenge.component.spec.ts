import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchengeComponent } from './exchenge.component';

describe('ExchengeComponent', () => {
  let component: ExchengeComponent;
  let fixture: ComponentFixture<ExchengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExchengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
