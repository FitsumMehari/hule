import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FillCartService {

  public ProductList: Array<any> = []


  public mItemName: string = "";
  public mItemPrice: number = 0;
  public mItemImageLoc: string = "";
  public mItemQuantity: number = 0;
  public mItemId: string = ""

  public TotalCartItem: number = 0;
  public SubTotal: number = 0;


  constructor() { }

  sendItemName(name: string) {
    this.mItemName = name;
  }
  sendItemId(id: string) {
    this.mItemId = id
  }
  sendItemPrice(price: number) {
    this.mItemPrice = price;
  }
  sendItemIimageLoc(image_loc: string) {
    this.mItemImageLoc = image_loc;
  }
  sendItemQuantity(_quantity: number) {
    this.mItemQuantity = _quantity;
    this.TotalCartItem += _quantity;
  }

  updateCart() {
    this.ProductList.push
      ({
        productId: this.mItemId,
        ProductImage: this.mItemImageLoc,
        ProductName: this.mItemName,
        ProductInclude: "Unknown",
        ProductDeliveryData: "Unknown",
        ProductSinglePrice: this.mItemPrice,
        ProductQuantity: this.mItemQuantity,
        ProductTotalPrice: (this.mItemQuantity * this.mItemPrice).toFixed(2)
      })
    this.SubTotal += this.mItemQuantity * this.mItemPrice;
  }

  reCalaculateValue(modifedIndex: number, value: number) {
    this.ProductList[modifedIndex].ProductQuantity += value;
    this.ProductList[modifedIndex].ProductTotalPrice = (this.ProductList[modifedIndex].ProductQuantity * this.ProductList[modifedIndex].ProductSinglePrice).toFixed(2);
    this.SubTotal += value * this.ProductList[modifedIndex].ProductSinglePrice;
    this.TotalCartItem += value;
  }

}
