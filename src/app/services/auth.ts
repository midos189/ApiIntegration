import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  token!:any;
  constructor(private http:HttpClient,private rout:Router){
  }
  login(username:string,password:string):Observable<any>{
    console.log(username,password);
     return this.http.post<any>("https://fakestoreapi.com/auth/login",{username,password}).pipe(
      tap((res:any)=>{localStorage.setItem('token',res.token);this.token=res.token}));
  }
  islogged():boolean{
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
  }
}
