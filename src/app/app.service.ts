import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_URL = environment.apiURL;


  constructor(private http: HttpClient) { }

  // Remove the this.API_URL from each line when deploying

  addUser(reg_data: NgForm) {
    return this.http.post(`${this.API_URL}/api/auth/register`, reg_data.value);
  }
  login_APICALL(log_data: NgForm) {
    return this.http.post(`${this.API_URL}/api/auth/login`, log_data.value);
  }

  getUserStatus_APICALL() {
    return this.http.get(`${this.API_URL}/api/user/stats`);
  }

  getAllProducts() {
    return this.http.get(`${this.API_URL}/api/product/getall`);
  }

  isAuthenticated() {
    if (!!localStorage.getItem('Token')) return true;
    else return false;
  }

  getBlogs() {
    return this.http.get(`${this.API_URL}/api/blogs/getall`);
  }

  createOrder(orderData: any) {

    var headers_object = new HttpHeaders().set('token', `Bearer ${localStorage.getItem("Token")}`);

    const httpOptions = {
      headers: headers_object
    };

    return this.http.post(`${this.API_URL}/api/order/create`, orderData, httpOptions)

  }
}
