import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corinzo-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corinzo-products.component.html',
  styleUrl: './corinzo-products.component.css'
})
export class CorinzoProductsComponent {
  @Input() imgPath: string = "";
  @Input() title: string = "";
  @Input() features: string[] = [];
}
