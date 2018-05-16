import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"shop", component: ShopComponent},
  {path:"cart", component: CartComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
