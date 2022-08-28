import { Component, OnInit } from '@angular/core';
import { StoreItemInteractionService } from '../../store-item-interaction.service'
import { FillCartService } from 'src/app/fill-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ////////////////////////////   descr   warr
  private mInfoShow: boolean[] = [true, false];

  public SelectedItemName: string = "";
  public SelectedItemPrice: number = 0;
  public SelectedItemImage: string = "";

  constructor(private _storeInteraction: StoreItemInteractionService, private _CardInsta: FillCartService, private router: Router) { }

  ngOnInit(): void {
    this._storeInteraction.ItemName$.subscribe((_name) => { 
      this.SelectedItemName = _name;
    });


    this._storeInteraction.ItemPriceTag$.subscribe(_price => {
      this.SelectedItemPrice = _price;
    });

    this._storeInteraction.ItemImageLoc$.subscribe(_imageLoc => {
      this.SelectedItemImage = _imageLoc;
    });
   
  }


  addToCart() 
  {
    this._CardInsta.sendItemName(this.SelectedItemName);
    this._CardInsta.sendItemPrice(this.SelectedItemPrice);
    this._CardInsta.sendItemQuantity(this.number_of_product);
    this._CardInsta.sendItemIimageLoc(this.SelectedItemImage);
    this._CardInsta.updateCart();
    this.router.navigate(['/store']);
  }

  openDescription(): void 
  {
    this.mInfoShow[0] = true;
    this.mInfoShow[1] = false;
  }
  openWarranty(): void 
  {
    this.mInfoShow[0] = false;
    this.mInfoShow[1] = true;
  }
  getDescription() : boolean { return this.mInfoShow[0]; }
  getWarrenty() : boolean { return this.mInfoShow[1]; }


  public number_of_product: number = 1;

  I_takAnotherOne() { this.number_of_product++; }
  I_hadToomuch() {if(this.number_of_product > 1) this.number_of_product--;}

 


}
