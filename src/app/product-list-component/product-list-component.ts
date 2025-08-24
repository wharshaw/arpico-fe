import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss'
})
export class ProductListComponent {

  products: string[] = ['Laptop', 'Phone'];

  @Output() productSelected = new EventEmitter<string>();

  onProductClick(product: string): void {
    this.productSelected.emit(product);
  }

}
