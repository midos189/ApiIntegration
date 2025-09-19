import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-parent',
  imports: [FormsModule,ProductList],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  searchText:string='';
}
