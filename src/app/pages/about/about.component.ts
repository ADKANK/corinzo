import { Component } from '@angular/core';
import { PageInfoComponent } from '../../shared/page-info/page-info.component';
import { CorinzoImagesComponent } from '../../shared/corinzo-images/corinzo-images.component';
import { AboutListComponent } from '../../shared/about-list/about-list.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageInfoComponent, CorinzoImagesComponent, AboutListComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
