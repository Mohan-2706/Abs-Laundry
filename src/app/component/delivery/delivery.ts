import { Component } from '@angular/core';
import { User } from '../../service/api/user';

@Component({
  selector: 'app-delivery',
  standalone: false,
  templateUrl: './delivery.html',
  styleUrl: './delivery.css'
})
export class Delivery {

    orders: any[] = [];
    search: any = { type: 'delivery', bill_no: null };
  
    constructor(private callApi: User) { }
  
    ngOnInit() {
      this.getSaveOrders(this.search);
    }
  
    getSaveOrders(data: any) {
      this.callApi.getOrdersList(data).subscribe((res:any) => {
        this.orders = res?.data;
      })
    }

    updateStatus(state: string, item: any) {
    let value = confirm("Are you ready to deliver this order").valueOf();
    if (!value) return;
    let payload = {
      type: 'deliveryRdy',
      status: state,
      item: item
    }
    this.callApi.updateOrderStatus(payload).subscribe((res: any) => {
      if (res?.status) {
        this.callApi.showSuccess(res?.message);
        this.getSaveOrders(this.search);
      } else {
        this.callApi.showError(res?.message);
      }
    })
  }

}
