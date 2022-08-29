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
  public orderId: string = ""
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

    const userId = this.appService.getUserId();
    let products: any = []
    this.ProductList.forEach((product) => {
      products.push({
        productId: product.productId,
        quantity: product.ProductQuantity,
      })
    })
    const amount = this.getTotalPrice();
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
        this.orderId = res._id
        this.addressIsSet = true;
      } else {
        this.addressIsSet = false;
      }
    })


  }


  getOrderFinalPrice(orderId: string) {

    this.appService.getOrderFinalPrice(orderId).subscribe((order) => {
      console.log(order);

    });
  }


}
