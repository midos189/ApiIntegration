import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { IProduct } from '../../models/iproduct';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit{
  total:number=0;
   _productService=inject(ProductService);
   cartItems!:IProduct[];
  ngOnInit(): void {
      this.cartItems=this._productService.cartItems;
      this.totalCart();
  }
  add(id:number){
  this._productService.addToCart(id);
  this.cartItems=this._productService.cartItems;
  this.totalCart();
}
remove(id:number){
  this._productService.removeFromCart(id);
  this.cartItems=this._productService.cartItems;
  this.totalCart();
}
totalCart(): void {
  this.total=this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log
}
clear(){
  this.total=0;
  this._productService.clearCart();
}
}
