import { Component, OnInit } from '@angular/core';

declare function sayChees(): void; 

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  public mActiveSideBar: boolean[] = [false, false, false, false, false, false, false];
  constructor() { }

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


}
