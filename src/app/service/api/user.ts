import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {

  private token: any = null;
  private URL = environment.URL;
  private subject$ = new BehaviorSubject('');
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private toaster: ToastrService) {
    this.token = sessionStorage.getItem("auth");
  }

  publish(msg: any) {
    this.subject$.next(msg);
  }

  subscribe() {
    return this.subject$.asObservable();
  }

  showSuccess(message: string) {
    this.toaster.success(message);
  }

  showError(message: string) {
    this.toaster.error(message);
  }

  showInfo(message: string) {
    this.toaster.info(message);
  }

  showWarning(message: string) {
    this.toaster.warning(message);
  }

  userLogin(payload: any) {
    return this.http.post(this.URL + "user/login", payload);
  }

  getUsertoken() {
    this.token = sessionStorage.getItem("auth");
    this.headers = new HttpHeaders().set("id", this.token).set("ngrok-skip-browser-warning", "69420");
    return this.token;
  }

  getProfile() {
    return this.http.get(this.URL + "user/profile", { headers: this.headers });
  }

  getAllUser() {
    return this.http.get(this.URL + "user/allUser", { headers: this.headers });
  }

  addUser(payload: any) {
    return this.http.post(this.URL + "user/addUser", payload, { headers: this.headers });
  }

  updateUser(payload: any) {
    return this.http.post(this.URL + 'user/updateUser', payload, { headers: this.headers })
  }

  getAllItems() {
    return this.http.get(this.URL + 'user/allItems', { headers: this.headers })
  }

  addAndUpdateItem(payload: any) {
    return this.http.post(this.URL + 'user/createAndUpdateItems', payload, { headers: this.headers })
  }

  createAndUpdatOrders(payload: any) {
    return this.http.post(this.URL + "user/createAndUpdateOrders", payload, { headers: this.headers })
  }

  getOrdersList(payload: any) {
    return this.http.post(this.URL + "user/getAllOrdersRecords", payload, { headers: this.headers });
  }

  getOrdersWithId(data: any) {
    return this.http.get(this.URL + "user/getOrdersWithId?kuri=" + data?.kuri + (data?.bill_no != undefined ? ('&bill_no=' + data?.bill_no) : ''), { headers: this.headers })
  }

  updateOrderStatus(payload: any) {
    return this.http.post(this.URL + 'user/updateOrderStatus', payload, { headers: this.headers })
  }

  getAllCustomers() {
    return this.http.get(this.URL + 'user/getAllCustomers', { headers: this.headers })
  }

  particularCustmrOrder(payload: any) {
    return this.http.post(this.URL + 'user/particularCustmrOrder', payload, { headers: this.headers })
  }

  getAllExpence() {
    return this.http.get(this.URL + 'user/getAllExpence', { headers: this.headers })
  }

  createExpence(payload: any) {
    return this.http.post(this.URL + 'user/createExpence', payload, { headers: this.headers })
  }

  getAllDeliveryRecords(payload: any) {
    return this.http.post(this.URL + 'user/getAllDeliveryRecords', payload, { headers: this.headers })
  }

}
