import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('arpico-insurance');

  selectedProduct: string | null = null;

  onProductSelected(product: string): void {
    this.selectedProduct = product;
  }
}
