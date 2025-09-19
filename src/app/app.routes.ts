import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Products } from './components/products/products';
import { ProductDetails } from './components/product-details/product-details';
import { NotFound } from './components/not-found/not-found';
import { Cart } from './components/cart/cart';
import { Parent } from './components/parent/parent';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    {path:'Home',component:Home},
    {path:'AboutUs',component:AboutUs},
    {path:'Products',component:Products},
    {path:'Products/:id',component:ProductDetails},
    {path:'Cart',component:Cart},
    {path:'Parent',component:Parent},
    {path:'Login',component:Login},
    {path:'Register',component:Register},
    {path:'**',component:NotFound}
];
