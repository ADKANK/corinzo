import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorinzoProductsComponent } from './corinzo-products.component';

describe('CorinzoProductsComponent', () => {
  let component: CorinzoProductsComponent;
  let fixture: ComponentFixture<CorinzoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorinzoProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorinzoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
