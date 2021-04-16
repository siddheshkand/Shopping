import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products/products.component';

export interface Cart extends Product {
  quanity:number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart:Cart[] = [];
  cartSubject = new BehaviorSubject<Cart[]>([]);

  addToCart(product:Product){
    let cartIndex = this.cart.findIndex((obj) => obj.id == product.id);
    if(cartIndex >= 0){
      this.cart[cartIndex].quanity = this.cart[cartIndex].quanity +1; 
    } else{
      this.cart.push({
        ...product,
        quanity:1
      });
    }
    this.cartSubject.next(this.cart);
  }

}
