import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorinzoRailingsComponent } from './corinzo-railings.component';

describe('CorinzoRailingsComponent', () => {
  let component: CorinzoRailingsComponent;
  let fixture: ComponentFixture<CorinzoRailingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorinzoRailingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorinzoRailingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
