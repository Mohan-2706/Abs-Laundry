import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import * as XLSX from 'xlsx'


@Component({
  selector: 'app-customerrecord',
  standalone: false,
  templateUrl: './customerrecord.html',
  styleUrl: './customerrecord.css'
})
export class Customerrecord {

  customers: any = [];
  filename: any = "Customer-history.xlsx";
  searchKuri: any = null;

  constructor(private callApi: User) { }

  ngOnInit() {
    this.getCustomers('clear');
  }

  getCustomers(type: any) {
    this.callApi.getAllCustomers().subscribe((res: any) => {
      this.customers = res?.data;
      if (type == 'search') {
        if (this.searchKuri != null || this.searchKuri != '') {
          let filter = this.customers.filter((el: any) => el?.kuri == this.searchKuri)
          this.customers = filter
        }
      } else {
        this.searchKuri = null
      }
    })
  }

  export() {
    let data = document.getElementById("record");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    XLSX.writeFile(wb, this.filename);
  }

  searchUser(type: any) {

    this.getCustomers(type);

  }

}
