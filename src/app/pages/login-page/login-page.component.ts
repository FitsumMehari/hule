import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  public isUserNameProvided: boolean = true;
  public isPasswordProvided: boolean = true;

  constructor(private Http: HttpClient) { }

  ngOnInit(): void {
  }



  onSubmit(data: NgForm) 
  {

    // Make sure the filed is not empty
    if(this.validateInput(data)) 
    {
      this.Http.post('api/auth/login', data.value).subscribe((res) => 
    {
      // Redirect to home page if it is cool
    });
    }
  }

  validateInput(data: NgForm) 
  {

    let RTvalue = true;
    if(data.value.user_name === "")
    {
      this.isUserNameProvided = false;
      RTvalue = false;
    }

    if(data.value.password === "")
    {
      this.isPasswordProvided = false;
      RTvalue = false;
    }

    return RTvalue;
  }
 
}
 