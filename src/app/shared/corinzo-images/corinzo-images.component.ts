import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-corinzo-images',
  standalone: true,
  imports: [],
  templateUrl: './corinzo-images.component.html',
  styleUrl: './corinzo-images.component.css'
})
export class CorinzoImagesComponent {
  @Input() imgPath: string = "";
  @Input() imgText: string = "";
}
