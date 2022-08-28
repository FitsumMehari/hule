import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view-message',
  templateUrl: './admin-view-message.component.html',
  styleUrls: ['./admin-view-message.component.css']
})
export class AdminViewMessageComponent implements OnInit {

  public showHotMsg: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
