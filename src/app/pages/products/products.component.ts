import { Component } from '@angular/core';
import { CorinzoProductsComponent } from '../../shared/corinzo-products/corinzo-products.component';
import { PageInfoComponent } from '../../shared/page-info/page-info.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CorinzoProductsComponent, PageInfoComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
