import { Component } from '@angular/core';
import { User } from '../../service/api/user';

@Component({
  selector: 'app-savepannel',
  standalone: false,
  templateUrl: './savepannel.html',
  styleUrl: './savepannel.css'
})
export class Savepannel {

  orders: any[] = [];
  search: any = { type: 'save' };

  constructor(private callApi: User) { }

  ngOnInit() {
    this.getSaveOrders(this.search);
  }

  getSaveOrders(data: any) {
    this.callApi.getOrdersList(data).subscribe((res: any) => {
      this.orders = res?.data;
    })
  }

  updateStatus(state: string, item: any) {
    let message = state == 'move' ? 'Are you want to move this order to confirm order' : 'Are you want to delete this order';
    let value = confirm(message).valueOf();
    if(!value) return;
    let payload = {
      type: 'confirm',
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
