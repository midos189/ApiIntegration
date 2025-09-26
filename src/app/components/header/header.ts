import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from "@angular/router";
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public auth:Auth,private rout:Router){}
  logout(){
    this.auth.logout();
    this.rout.navigate(['./Login']);
  }
}
