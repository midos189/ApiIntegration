import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
      cartItems:IProduct[]=[];
      productList:IProduct[]=[
        {id:1,name:"product 1",details:"......",quantity:0,price:40,img:"assets/images/product.jpg",categoryId:1},
        {id:2,name:"product 2",details:"......",quantity:10,price:50,img:"assets/images/product.jpg",categoryId:1},
        {id:4,name:"product 4",details:"......",quantity:2,price:70,img:"assets/images/product.jpg",categoryId:2},
        {id:3,name:"product 3",details:"......",quantity:5,price:40,img:"assets/images/product.jpg",categoryId:2},
        {id:5,name:"product 5",details:"......",quantity:1,price:60,img:"assets/images/product.jpg",categoryId:3}
      ];
      getAll(){
        return this.productList;
      }
      getFiltered(filter:string){
        return this.productList.filter(p=>p.name.toLowerCase().includes(filter.toLowerCase()))
      }
      getProductById(id:number):IProduct{
        const prd=this.productList.find(p=>p.id==id);
        if (!prd) {
           throw new Error(`Product with id ${id} not found`);
         }
           return prd;
      }
      getProductsByCatId(id:number):IProduct[]{
        return this.productList.filter(p=>p.categoryId==id);
      }
      addToCart(id: number) {
    const existing = this.cartItems.find(p => p.id === id);
    const prd = this.productList.find(p => p.id === id);
    if (existing) {
      existing.quantity += 1;
      if (prd && prd.quantity > 0) {
        prd.quantity--;
      }
    } else {
      const product=this.productList.find(p=>p.id==id);
      if(product&&prd){
      this.cartItems.push({ ...product, quantity: 1 });
      prd.quantity--;}
    }
  }
  removeFromCart(id:number){
    const existing = this.cartItems.find(p => p.id === id);
    const prd = this.productList.find(p => p.id === id);
    if(existing&&existing.quantity>1){
      existing.quantity--;
      if (prd) {
        prd.quantity++;
      }
    }else{
      this.cartItems = this.cartItems.filter(p => p.id !== id);
      if(prd)
      prd.quantity++;
    }
  }
  clearCart(){
    for(let i=0;i<this.cartItems.length;i++){
    const removed=this.cartItems.pop();
    const existing=this.productList.find(p=>p.id==removed?.id);
    if(removed&&existing){
      existing.quantity+=removed.quantity;
    }
    }
    console.log(this.cartItems);
  }
}
