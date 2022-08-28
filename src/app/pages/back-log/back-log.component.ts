import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-log',
  templateUrl: './back-log.component.html',
  styleUrls: ['./back-log.component.css']
})
export class BackLogComponent implements OnInit {

  constructor() { }
  updateCustomProp() 
  {
  }

  ngOnInit(): void {
  }



  public showForm(): void{
    this.DisplayForm = !this.DisplayForm;
  }
  public DisplayForm: boolean = true;

}
