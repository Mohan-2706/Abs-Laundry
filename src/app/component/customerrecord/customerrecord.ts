import { Component } from '@angular/core';
import { User } from '../../service/api/user';

@Component({
  selector: 'app-customerrecord',
  standalone: false,
  templateUrl: './customerrecord.html',
  styleUrl: './customerrecord.css'
})
export class Customerrecord {

  customers: any = [];

  constructor(private callApi: User) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.callApi.getAllCustomers().subscribe((res: any) => {
      this.customers = res?.data;
    })
  }

}
