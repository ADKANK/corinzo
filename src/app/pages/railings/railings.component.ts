import { Component } from '@angular/core';
import { PageInfoComponent } from '../../shared/page-info/page-info.component';
import { CorinzoRailingsComponent } from '../../shared/corinzo-railings/corinzo-railings.component'

@Component({
  selector: 'app-railings',
  standalone: true,
  imports: [PageInfoComponent, CorinzoRailingsComponent],
  templateUrl: './railings.component.html',
  styleUrl: './railings.component.css'
})
export class RailingsComponent {

}
