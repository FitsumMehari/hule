import { Component, OnInit } from '@angular/core';
import { FillCartService } from 'src/app/fill-cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  public ProductList: Array<any> = [ ]
  private SubTotalPrice: any;
  constructor(public _Cart: FillCartService) {
   }

  ngOnInit(): void 
  {
    this.ProductList = this._Cart.ProductList;
    this.SubTotalPrice = this._Cart.SubTotal;
  }



  updateList() 
  {
    
      
  }
  
  addProduct(productIndex: number):void 
  { 
      this._Cart.reCalaculateValue(productIndex, 1);
  }
  looseProduct(productIndex: number) : void 
  {
    if(this._Cart.ProductList[productIndex].ProductQuantity > 1)
        this._Cart.reCalaculateValue(productIndex, -1);
  }
  getTotalPrice() : string 
  { 
    this.SubTotalPrice = this._Cart.SubTotal
    return this.SubTotalPrice.toFixed(2); 
  }
  
   
  // TempStorage before pushing
  public __ProductImage: string = " ";
  public __Productname: string = " ";
  public __ProductSinglePrice: number = 0;
  public __ProductQuantity: number = 0;

 

}
