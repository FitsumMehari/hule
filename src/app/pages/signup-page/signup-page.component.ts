import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  public stages: Array<boolean> = [];
  public strength_level: Array<boolean> = [];
  public index: number = 0;
  public UserPasswordOne: string = "";
  public UserPasswordTwo: string = "";
  public Icon_type_good: string = "fa-face-smile";
  public Icon_type_bad: string = "fa-triangle-exclamation";
  public isLast: boolean = false;

// The next vers are to check input fild add fill

/// The Name Fild
  public isFirstNameFill: boolean = true;
  public isFatherNameFill: boolean = true;
  public isLastNameFill: boolean = true;

  // Phoenumber
  public isPhoneNumberFill: boolean = true;

  // Email
  public isEmailFill: boolean = true;

  // Passwrod
  public isPasswrodFill: boolean = true;
  public isPasswrod2Fill: boolean = true;

  // Term and Condition
  public isTermCondition: boolean = true;

  constructor(private http: HttpClient, private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.index = 0;
    this.stages.push(true);
    this.stages.push(false);
    this.stages.push(false);
    this.stages.push(false);
    this.stages.push(false);

    // This is for password srength check
    // each bool value check one condiftion
    // if all condition are valid all bool are true
    for(let i = 0; i < 4; i++)
      this.strength_level.push(false);
      this.getDataFromAPI();
  }

  getDataFromAPI()
  {
  }

  prepNext(reg_data: NgForm)
  {
    if(this.checkDataFill(reg_data, this.index))
    {
      this.index++;
    this.stages[this.index - 1] = false;
    this.stages[this.index] = true;

    if(this.index == 4)
    {
      this.isLast = true;
    }
    }
  }

    onRegister(reg_data: NgForm)
  {
    // Submition process
      if(this.isLast && this.checkDataFill(reg_data, this.index, true))
      {
       this.appService.addUser(reg_data).subscribe((res) =>
       {
         this.router.navigate(['./login']);
       }, (err) => {
         console.log(err);
       });
        this.index = 0;
      }
  }

  checkDataFill(reg_data: NgForm, index: number, checkTerm: boolean = false)
  {
    if(index == 1)
    {
      let RTvalue = true;
      if(reg_data.value.user_first_name === "")
        {
          RTvalue = false;
          this.isFirstNameFill = false;
        } else this.isFirstNameFill = true;
      if(reg_data.value.user_father_name === "")
      {
        RTvalue = false;
        this.isFatherNameFill = false;
      } else this.isFatherNameFill = true;
      if(reg_data.value.user_last_name === "")
      {
        RTvalue = false;
        this.isLastNameFill = false;
      } else this.isLastNameFill = true;

      return RTvalue;
    }

    if(index == 2)
    {
      if(reg_data.value.user_phone_number === "")
        {
          this.isPhoneNumberFill = false;
          return false;
        }
      return true;
    }

    if(index == 3)
    {
      if(reg_data.value.user_email === "")
        {
          this.isEmailFill = false;
          return false;
        }
      return true;
    }

    if(index == 4)
    {
      let RTvalue = true;
      if(reg_data.value.passwrod === "")
        {
          this.isPasswrodFill = false;
          RTvalue = false;
        } else this.isPasswrodFill = true;
      if(reg_data.value.passwrod2 === "")
      {
        this.isPasswrod2Fill = false;
        RTvalue = false;
      } else this.isPasswrod2Fill = true;


      if(checkTerm)
      {
        if(reg_data.value.agreeTermAndCondition === "")
        {
          this.isTermCondition = false;
          RTvalue = false;
        } else this.isTermCondition = true;
      }

      return RTvalue;
    }

    return true;
  }
  validate(value: string)
  {
    this.strength_level[0] = this.CheckUpperCase(value);
    this.strength_level[1] = this.CheckLowerCase(value);
    this.strength_level[2] = this.CheckNumber(value);
  }
  validatePassword(passOne: string, passTwo: string)
  {
    this.strength_level[3] = this.CheckPasswordMatch(passOne, passTwo);
  }

  private CheckUpperCase(value: string): boolean
  {
    for(let i = 0; i < value.length; i++)
    {
      let chars = value[i];
      if(value[i] === chars.toUpperCase() && Number.isNaN(+chars))
      {
        return true;
      }
    }
    return false;
  }
  private CheckLowerCase(value: string): boolean
  {
    for(let i = 0; i < value.length; i++)
    {
      let chars = value[i];
      if(value[i] === chars.toLowerCase() && Number.isNaN(+chars))
      {
        return true;
      }
    }
    return false;
  }

  private CheckNumber(value: string): boolean
  {
    for(let i = 0; i < value.length; i++)
    {
      let chars = value[i];
      if(!Number.isNaN(+chars))
      {
        return true;
      }
    }
    return false;
  }

  private CheckPasswordMatch(passOne: string, passTwo: string) : boolean
  {
    if(passOne.length !== passTwo.length)
      return false;
      for(let i = 0; i < passOne.length; i++)
        if(passOne[i] != passTwo[i])
          return false;
        return true;
  }

  public __to__: string= "#";


}
