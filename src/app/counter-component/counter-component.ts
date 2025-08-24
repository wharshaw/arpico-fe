import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  standalone: false,
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.scss'
})
export class CounterComponent {

  count: number = 0;

  increase(): void {
    this.count++;
  }

}
