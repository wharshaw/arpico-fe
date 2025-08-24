import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-display-component',
  standalone: false,
  templateUrl: './product-display-component.html',
  styleUrl: './product-display-component.scss'
})
export class ProductDisplayComponent implements OnInit{

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

}
