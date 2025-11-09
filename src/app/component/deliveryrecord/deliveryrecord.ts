import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx'


@Component({
  selector: 'app-deliveryrecord',
  standalone: false,
  templateUrl: './deliveryrecord.html',
  styleUrl: './deliveryrecord.css'
})
export class Deliveryrecord {

  orders: any = [];
  search: any = { kuri: null, startDate: null, endDate: null };
  filename: any = "Delivery-history.xlsx";


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

  export () {
    let data = document.getElementById("record");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    XLSX.writeFile(wb, this.filename);
  }

}
