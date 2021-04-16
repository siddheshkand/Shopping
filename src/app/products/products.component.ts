import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

export interface Product {
  id: number;
  name:string;
  price:number;
  description:string;
  imageUrl:string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  products :Product[] = [
    { id: 1, name: "Apple", price: 150, description: "Washington Apple" ,imageUrl:"https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1"},
    { id: 2, name: "Apple Large", price: 140, description: "JnK Apple" ,imageUrl:"https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg"},
    { id: 3, name: "Mango", price: 5000, description: "Devgad Hapus" ,imageUrl:"https://sukhis.com/wp-content/uploads/2019/07/Mango.jpg"},
    { id: 4, name: "PineApple", price: 800, description: "Dubai Pineapple" ,imageUrl:"https://post.healthline.com/wp-content/uploads/2020/09/benefits-of-pineapple-1200x628-facebook-1200x628.jpg"},
    { id: 5, name: "Cherry", price: 900, description: "England Cerry" ,imageUrl:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/health_benefits_of_cherries_slideshow/1800x1200_health_benefits_of_cherries_slideshow.jpg"},
  ]

  // increase(id:number){
  //   let index  = this.products.findIndex(obj => obj.id == id);
  //   if (index>=0){
  //     this.products[index].price = this.products[index].price + 1;
  //   }
  // }
  // decrease(id:number){
  //   let index  = this.products.findIndex(obj => obj.id == id);
  //   if (index>=0){
  //     this.products[index].price = this.products[index].price - 1;
  //   }
  // }

  addToCart(product:Product){
    this.cartService.addToCart(product);
  }
}
