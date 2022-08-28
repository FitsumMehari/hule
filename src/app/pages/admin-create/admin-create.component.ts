import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  public showBigMenu: boolean = true;
  public showCreateBlogDialog: boolean = false;
  public showFAQsDialog: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
