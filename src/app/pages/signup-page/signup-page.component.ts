import { Component, OnInit } from '@angular/core';

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
  public Icon_type_good: string = "fa-check";
  public Icon_type_bad: string = "fa-xmark";
  constructor() { }

  ngOnInit(): void { 
    this.index = 1;
    this.stages.push(true);
    this.stages.push(false);
    this.stages.push(false);
    this.stages.push(false);
    this.stages.push(false);

    for(let i = 0; i < 4; i++)
      this.strength_level.push(false);
  }

  prepNext() 
  {
    if(this.index != 0)
      this.stages[this.index - 1] = false;
    else
      this.stages[4] = false;
    this.stages[this.index] = true;
    this.index++;
    if(this.index == 5) 
       {
        this.__to__ = '/login';
        this.index = 0;
       }
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
