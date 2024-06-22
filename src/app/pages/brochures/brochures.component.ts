import { Component } from '@angular/core';
import { CorinzoBrochuresComponent } from '../../shared/corinzo-brochures/corinzo-brochures.component';
import { PageInfoComponent } from '../../shared/page-info/page-info.component';

@Component({
  selector: 'app-brochures',
  standalone: true,
  imports: [CorinzoBrochuresComponent, PageInfoComponent],
  templateUrl: './brochures.component.html',
  styleUrl: './brochures.component.css'
})
export class BrochuresComponent {

}
