import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CardShadow } from "../../directives/card-shadow";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormatPipe } from '../../pipes/format-pipe';
import { ProductService } from '../../services/product-service';
import { Router, RouterLink } from "@angular/router";
import { Apiservice } from '../../services/apiservice';
import { IproductApi } from '../../models/iproduct-api';
@Component({
  selector: 'app-products',
  imports: [FormsModule, CardShadow, CurrencyPipe, DatePipe, FormatPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  choosen:IproductApi[]=[];
  constructor(private prdService:Apiservice,private router:Router){
     this.prdService.getAllProducts().subscribe((response)=>{
      this.choosen=response;
     });
  }
  textFormat:string="";
  currentDate:Date=new Date();
  searchText:string="";
  num:number=0;
  categoryList:ICategory[]=[
        {id:1,name:"food"},
    {id:2,name:"electroincs"},
    {id:3,name:"home applications"}
  ]
//   add(prd:IProduct){
//     this.prdService.addToCart(prd.id);
//   }
//   buy(prd:IProduct){
//     this.prdService.addToCart(prd.id);
//     this.prdService.addToCart(prd.id);
//   }
//   details(id:number){
//     console.log(this.router.navigate(['Products',id]));
//   }
//   filteredProducts() {
//     this.choosen=this.prdService.getFiltered(this.searchText);
// }
// catFilter(id:number){
//   if(id!=1&&id!=2&&id!=3){this.choosen=this.prdService.getAll();}else{
//   this.choosen=this.prdService.getProductsByCatId(id);}
//   }
}
