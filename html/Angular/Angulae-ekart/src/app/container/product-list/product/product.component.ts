import { Component, Input, input } from '@angular/core';
import{Product} from './../../../Models/product';

@Component({
  selector: 'app-product',
  // standalone: true,
  // imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: Product;
}
