import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deliveryrecord',
  standalone: false,
  templateUrl: './deliveryrecord.html',
  styleUrl: './deliveryrecord.css'
})
export class Deliveryrecord {

  orders: any = [];
  search: any = { kuri: null, startDate: null, endDate: null };

  constructor(private callApi: User,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((res:any)=>{
      if(res?.kuri){
        this.search.kuri = res?.kuri;
      }
    })
    this.getOrders(this.search);
  }

  getOrders(data: any) {
    this.callApi.particularCustmrOrder(data).subscribe((res: any) => {
      this.orders = res?.data;
    })
  }

}
