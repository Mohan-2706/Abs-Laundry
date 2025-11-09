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

  constructor(private callApi: User) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.callApi.getAllCustomers().subscribe((res: any) => {
      this.customers = res?.data;
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
