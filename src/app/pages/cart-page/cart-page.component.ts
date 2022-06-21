import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  addProduct():void { this.productCount++; }
  looseProduct() : void { if(this.productCount >= 2) this.productCount--; }
  geProductCount() : number { return this.productCount; };
  getTotalPrice() : number { return this.productCount * this.singlePrice; }
  getSinglePrice() : number { return this.singlePrice; }
  
  
  private productCount: number = 1;
  private singlePrice : number = 86.56;
}
