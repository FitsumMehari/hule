import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { FillCartService } from 'src/app/fill-cart.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  
  userName:any = '';

  constructor(private _Cart: FillCartService, private appServ: AppService, private router: Router) {
   }
  
  ngOnInit(): void {
    this.CardCount = this._Cart.TotalCartItem;
    this.userName = this.getUserName();
  }

  private getUserName()
  {
    this.appServ.getUserStatus_APICALL().subscribe((res: any) => {
      return res.username;
    }, (err) => {
      console.log(err);
      //this.router.navigate(['./login']);
    });
  }


  

  /// This Proccess is really over kill until i find abetter way to do it it will do for NOW!

  // The logic here is
  // Each nav like wiil have hard coded id start from 0 - n
  // in this case we have 6 item
  // We set the first flag to true becouse the user land for the first time in home page
  // and hard coded the index for each TAB(link) so the home page tab will have index 0 as u can see here
  private mTabFlag: boolean[] = [false, false, false, false, false, false];
  getCartItemCount() : number 
  {
    this.CardCount = this._Cart.TotalCartItem;
    return this.CardCount;
  }
  setActiveTab(nav_item_id: number): void 
  {
    // Here we are assign value 
    // This function executed when ever the user click the navbar link
    // The tab call this function with it own navbar link id
    // and this function set all tab active falg to false except
    // the provided one
    for(let i = 0; i < 6; i++) 
    {
        if(i == nav_item_id)
          this.mTabFlag[nav_item_id] = true;
        else this.mTabFlag[i] = false;
    }
  }
  getActiveTabValue(tab_id:number) : boolean 
  {
    // Here we only provide the flag info to the UI
    // Based on the provided flag ID
    return this.mTabFlag[tab_id];
    // This function should not reach here but if it did
    // we return false 
    // we don't want every link look like activated
   // return false;
  }

  private CardCount: number = 0;
 
}
