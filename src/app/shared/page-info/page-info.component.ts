import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-info',
  standalone: true,
  imports: [],
  templateUrl: './page-info.component.html',
  styleUrl: './page-info.component.css'
})
export class PageInfoComponent {
  @Input() pageInfo: string = "";
  @Input() pageDescription: string = "";
}
