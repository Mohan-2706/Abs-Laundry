import { Component } from '@angular/core';
import { User } from '../../service/api/user';

@Component({
  selector: 'app-deliveryhistory',
  standalone: false,
  templateUrl: './deliveryhistory.html',
  styleUrl: './deliveryhistory.css'
})
export class Deliveryhistory {

  orders: any[] = [];
  search: any = { bill_no: null, kuri: null };

  constructor(private callApi: User) { }

  ngOnInit() {
    this.getSaveOrders(this.search);
  }

  getSaveOrders(data: any) {
    this.callApi.getAllDeliveryRecords(data).subscribe((res: any) => {
      this.orders = res?.data;
    })
  }

}
