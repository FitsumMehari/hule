import { Component, OnInit } from '@angular/core';

declare function sayChees(): void; 

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
