import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corinzo-railings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corinzo-railings.component.html',
  styleUrl: './corinzo-railings.component.css'
})
export class CorinzoRailingsComponent {
  @Input() imgPath: string = "";
  @Input() title: string = "";
  @Input() features: string[] = [];
  @Input() specification: string[] = [];
  @Input() glasses: string[] = [];
  @Input() finish: string[] = [];
}
