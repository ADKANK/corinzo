import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-corinzo-brochures',
  standalone: true,
  imports: [],
  templateUrl: './corinzo-brochures.component.html',
  styleUrl: './corinzo-brochures.component.css'
})
export class CorinzoBrochuresComponent {
  @Input() imgPath: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
}
