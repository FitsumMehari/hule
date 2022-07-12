import { Component, OnInit } from '@angular/core';
import { StoreItemInteractionService } from '../../store-item-interaction.service'
import { Router } from '@angular/router';

declare function sayChees(): void; 

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  public mActiveSideBar: boolean[] = [false, false, false, false, false, false, false];
  public filterValue: any = "All";
  constructor(private _storeInteraction: StoreItemInteractionService, private router: Router) { }

  ngOnInit(): void {
  }



  setActiveTab(index:number):void 
  {
    for(let i = 0; i < 7; i++) 
    {
      if(i == index) this.mActiveSideBar[i] = true;
      else this.mActiveSideBar[i] = false;
    }
  }

  public wrapData(index: number): void 
  {
    this._storeInteraction.sendItemName(this.Products[index].ItemName);
    this._storeInteraction.sendItemPrice(this.Products[index].ItemPrice);
    this._storeInteraction.sendItemIimageLoc(this.Products[index].ItemImageLoc);
    this.router.navigate(['/modal']);
  }

  public setFilterValue(value: string)  
  {
    this.filterValue = value;
  }


  public Products: Array<any> = [
    { ItemName: "Russian Vodka", ItemPrice: 120.98, ItemImageLoc: "../../../assets/image/product/liqour/ban-russian-vodka.png", ItemCatagories: "Liqour", isYoungBlood: false},
    { ItemName: "Basket", ItemPrice: 540.08, ItemImageLoc: "../../../assets/image/product/liqour/pexels-asad-photo-maldives-1024967.jpg", ItemCatagories: "Detergent", isYoungBlood: false},
    { ItemName: "Halt", ItemPrice: 216.10, ItemImageLoc: "../../../assets/image/product/liqour/pexels-craig-adderley-1563356.jpg", ItemCatagories: "Asbeza Package"},
    { ItemName: "Photocopy", ItemPrice: 860.00, ItemImageLoc: "../../../assets/image/product/liqour/pexels-danne-516541.jpg", ItemCatagories: "Spices", isYoungBlood: true},
    { ItemName: "Pledge", ItemPrice: 363.00, ItemImageLoc: "../../../assets/image/product/liqour/pexels-j-u-n-e-1767434.jpg", ItemCatagories: "Asbeza Package", isYoungBlood: false},
    { ItemName: "Vegetarian", ItemPrice: 250.00, ItemImageLoc: "../../../assets/image/product/liqour/pexels-pixabay-33109.jpg", ItemCatagories: "Spices", isYoungBlood: false},
    { ItemName: "Demonstration", ItemPrice: 856.40, ItemImageLoc: "../../../assets/image/product/liqour/pexels-pixabay-45853.jpg", ItemCatagories: "Holiday Spacial", isYoungBlood: false},
    { ItemName: "Laborer", ItemPrice: 328.12, ItemImageLoc: "../../../assets/image/product/liqour/pexels-pixabay-210186.jpg", ItemCatagories: "Liqure", isYoungBlood: false},
    { ItemName: "Comment", ItemPrice: 750.87, ItemImageLoc: "../../../assets/image/product/liqour/pexels-pixabay-301977.jpg", ItemCatagories: "Liqure", isYoungBlood: false},
    { ItemName: "Snatch", ItemPrice: 989.83, ItemImageLoc: "../../../assets/image/product/liqour/pexels-rachel-claire-7276947.jpg", ItemCatagories: "Liqour", isYoungBlood: false},
    { ItemName: "Fresh", ItemPrice: 795.15, ItemImageLoc: "../../../assets/image/product/liqour/pexels-snapwire-670061.jpg", ItemCatagories: "Liqour", isYoungBlood: false}
  ]

}
