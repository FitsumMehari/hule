import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ////////////////////////////   descr   warr
  private mInfoShow: boolean[] = [true, false];


  constructor() { }

  ngOnInit(): void {
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
