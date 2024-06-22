import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorinzoBrochuresComponent } from './corinzo-brochures.component';

describe('CorinzoBrochuresComponent', () => {
  let component: CorinzoBrochuresComponent;
  let fixture: ComponentFixture<CorinzoBrochuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorinzoBrochuresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorinzoBrochuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
