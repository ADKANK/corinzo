import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-about-list',
  standalone: true,
  imports: [],
  templateUrl: './about-list.component.html',
  styleUrl: './about-list.component.css'
})
export class AboutListComponent {
  @Input() text1: string = "";
  @Input() text2: string = "";
  @Input() text3?: string = "";
}
