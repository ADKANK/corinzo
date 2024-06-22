import { Component } from '@angular/core';
import { PageInfoComponent } from '../../shared/page-info/page-info.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [PageInfoComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
