import { Component, OnInit } from '@angular/core';
import { Cart, CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  constructor(private cartService:CartService){

  }
  cart:Cart[] = []
  ngOnInit(): void {

    this.cartService.cartSubject.subscribe(next => {
      this.cart = next;
    })
  }
  getGrandTotal(){
    return this.cart.map(obj => obj.quanity*obj.price).reduce((a,b) => a+b);
  }
}
