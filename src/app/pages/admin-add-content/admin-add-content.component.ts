import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-admin-add-content',
  templateUrl: './admin-add-content.component.html',
  styleUrls: ['./admin-add-content.component.css']
})
export class AdminAddContentComponent implements OnInit {

  public isProcessProductHidden: boolean = false;
  public isPackageProcessHidden: boolean = true;
  public showBigMenu: boolean = true;
  public PackgeContent: Array<any> = [];
  public Content: any;
  constructor() { }

  ngOnInit(): void {
  }


  addToMiniList(data: String) 
  {
    if(data != '')
    {
      this.PackgeContent.push(data);
    }
  }

}
