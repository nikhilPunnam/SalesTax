import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Item } from '../item.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  sub: Subscription;

  constructor(private productService: ProductService, private router: Router) { }
  items: Array<any>;
  cartItems: Array<any> = [];

  ngOnInit() {
    this.items = this.productService.getItem();
  }

  onAddToCart(item: Item){
    this.productService.addItemToCart(item);
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }

}
