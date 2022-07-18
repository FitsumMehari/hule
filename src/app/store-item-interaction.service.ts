import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreItemInteractionService {


  private _ItemNameSource$ =  new BehaviorSubject<any>({});
  private _ItemPriceTagSource$ = new BehaviorSubject<any>({});
  private _ItemImageLocSource$ = new BehaviorSubject<any>({});

  ItemName$  = this._ItemNameSource$.asObservable();
  ItemPriceTag$  = this._ItemPriceTagSource$.asObservable();
  ItemImageLoc$  = this._ItemImageLocSource$.asObservable();

  constructor() { }


  sendItemName(name: string) 
  {
    this._ItemNameSource$.next(name);
  }
  sendItemPrice(price: number) 
  {
    this._ItemPriceTagSource$.next(price);
  }
  sendItemIimageLoc(image_loc: string) 
  {
    this._ItemImageLocSource$.next(image_loc);
  }

}