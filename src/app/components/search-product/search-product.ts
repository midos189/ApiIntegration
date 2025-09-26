import { HttpClient } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Idummy } from '../../models/idummy';

@Component({
  selector: 'app-search-product',
  imports: [FormsModule],
  templateUrl: './search-product.html',
  styleUrl: './search-product.css'
})
export class SearchProduct {
  searchText:string='';
  products:any[]=[];
  constructor(private http:HttpClient){}
search(){
this.http.get<any>(`https://dummyjson.com/products/search?q=${this.searchText}`).subscribe((res)=>{
        this.products=res.products;
        //console.log(this.products)
})
}
}