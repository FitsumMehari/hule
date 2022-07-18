import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getData() 
  {
    return this.http.get('/api/testRout');
  }
  addUser(reg_data: NgForm) 
  {
    return this.http.get("/api/auth/register",  reg_data.value);
  }
}
