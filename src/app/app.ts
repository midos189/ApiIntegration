import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';
import { FormsModule } from '@angular/forms';
import { ProductList } from './components/product-list/product-list';
import { Header } from "./components/header/header";
import { Clock } from './components/clock/clock';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Header,Clock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('standalone-project');
  showClock:boolean=true;
  toggleClock() {
    this.showClock = !this.showClock;
  }
}
