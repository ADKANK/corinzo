import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailingsComponent } from './railings.component';

describe('RailingsComponent', () => {
  let component: RailingsComponent;
  let fixture: ComponentFixture<RailingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RailingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
