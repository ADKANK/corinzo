import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorinzoImagesComponent } from './corinzo-images.component';

describe('CorinzoImagesComponent', () => {
  let component: CorinzoImagesComponent;
  let fixture: ComponentFixture<CorinzoImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorinzoImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorinzoImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
