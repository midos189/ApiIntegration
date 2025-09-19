import { Component,Input,OnChanges,SimpleChanges,inject } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnChanges{
  @Input() filterText!:string;
  test:IProduct[]=[]
  products:IProduct[]=[];
  _productService=inject(ProductService);
  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterText']) {
      this.products = this._productService.getAll().filter(p =>
        p.name.toLowerCase().includes(this.filterText.toLowerCase())
      );}
}}
