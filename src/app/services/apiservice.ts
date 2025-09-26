import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IproductApi } from '../models/iproduct-api';

@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  constructor(private http:HttpClient){}
  getAllProducts():Observable<IproductApi[]>{
    return this.http.get<IproductApi[]>('https://fakestoreapi.com/products');
  }
  getProductById(id:number):Observable<IproductApi>{
    return this.http.get<IproductApi>(`https://fakestoreapi.com/products/${id}`)
  }
}
