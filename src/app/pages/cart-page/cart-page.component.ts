import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FillCartService } from 'src/app/fill-cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  private isCartEmpty: boolean = true;
  public ProductList: Array<any> = []
  private SubTotalPrice: any;

  addressIsSet: boolean = false;

  constructor(public _Cart: FillCartService, private appService: AppService) {
  }

  ngOnInit(): void {
    this.ProductList = this._Cart.ProductList;
    this.SubTotalPrice = this._Cart.SubTotal;
  }

  isCartHasStuff(): boolean {
    return this.ProductList.length > 0;
  }

  updateList() {


  }

  addProduct(productIndex: number): void {
    this._Cart.reCalaculateValue(productIndex, 1);
  }
  looseProduct(productIndex: number): void {
    if (this._Cart.ProductList[productIndex].ProductQuantity > 1)
      this._Cart.reCalaculateValue(productIndex, -1);
  }
  getTotalPrice(): string {
    this.SubTotalPrice = this._Cart.SubTotal
    return this.SubTotalPrice.toFixed(2);
  }
  removeItem(index: number) {
    for (let i = 0; i < this.ProductList.length; i++) {
      if (index == i) {
        this.ProductList.splice(i, 1);
      }
    }
  }


  // TempStorage before pushing
  public __ProductImage: string = " ";
  public __Productname: string = " ";
  public __ProductSinglePrice: number = 0;
  public __ProductQuantity: number = 0;


  // Order Method

  order(orderData: any) {
    console.log(orderData);

    const userId = "Sample ID"
    const products = [
      {
        productId: "Sample Product ID",
        quantity: 10
      },
      {
        productId: "Sample Product ID",
        quantity: 10
      }
    ]
    const amount = 2323.23
    const address = {
      firstName: orderData.RFname,
      lastName: orderData.RFFname,
      city: orderData.rCityC,
      houseNum: orderData.Address,
      areaName: orderData.rAreaName,
      phoneNum: orderData.rPhone,
      specialNote: orderData.noteToDeliver,
    }


    const order = {
      userId: userId,
      products: products,
      amount: amount,
      address: address
    }

    this.appService.createOrder(order).subscribe((res: any) => {
      if (res.message === "success") {
        this.addressIsSet = true;
      } else {
        this.addressIsSet = false;
      }
    })


  }



}
