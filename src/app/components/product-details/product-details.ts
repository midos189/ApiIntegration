import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{
  constructor(private _productService:ProductService,private _activatedRoute:ActivatedRoute){}
  product!:IProduct;
  ngOnInit(): void {
    const id=Number(this._activatedRoute.snapshot.paramMap.get('id'));
    if(id)
      this.product=this._productService.getProductById(id);
  }
  // @Input() product!:IProduct;
  // @Output() closeEvent=new EventEmitter<any>();
  add(itemId:number):void{
    this._productService.addToCart(itemId);
  }
}
