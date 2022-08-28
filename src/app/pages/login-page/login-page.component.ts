import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/intinterceptors/auth.interceptor';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  public isUserNameProvided: boolean = true;
  public isPasswordProvided: boolean = true;
  public API_LOGIN_ERROR: string = "";

  constructor(private Http: HttpClient, private appServ: AppService, private router: Router) { }

  Responese: any;

  ngOnInit(): void {
  }

  LogInUser(LogInfo: NgForm)
  {
    this.API_LOGIN_ERROR = "";
    if(this.validateInput(LogInfo))
    {
      this.appServ.login_APICALL(LogInfo).subscribe((res: any) =>
       {
        // console.log(res);
        localStorage.setItem('Token', res.accessToken);
        AuthInterceptor.accessToken = res.accessToken;
        this.router.navigate(['/home']);
       }, (err) => {
        this.API_LOGIN_ERROR = err.error;
       });
    }
  }

  validateInput(data: NgForm)
  {

    let RTvalue = true;
    if(data.value.username === "")
    {
      this.isUserNameProvided = false;
      RTvalue = false;
    } else this.isUserNameProvided = true;

    if(data.value.password === "")
    {
      this.isPasswordProvided = false;
      RTvalue = false;
    } else this.isPasswordProvided = true;

    return RTvalue;
  }

}
