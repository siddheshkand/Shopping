import { Component } from '@angular/core';
import { Cart, CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping';

  constructor(private cartService:CartService){

  }
cart:Cart[] = []
  ngOnInit(): void {

    this.cartService.cartSubject.subscribe(next => {
      this.cart = next;
    })
  }
}
